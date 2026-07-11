import axios from 'axios';

const ASTRO_API_PATTERN = /^https:\/\/api\.jyotishamastroapi\.com\/api\//i;

const memoryCache = new Map();
const axiosCache = new Map();

const buildCacheKey = (input, init = {}) => {
  if (typeof input === 'undefined' || input === null) return null;

  const rawUrl = typeof input === 'string'
    ? input
    : input instanceof URL
      ? input.toString()
      : input.url;

  if (!rawUrl || !ASTRO_API_PATTERN.test(rawUrl)) return null;

  const method = (init?.method || 'GET').toUpperCase();
  if (method !== 'GET') return null;

  return `${method}:${rawUrl}`;
};

const createCachedResponse = (cached) => {
  const body = cached.type === 'json' ? JSON.stringify(cached.body) : cached.body;

  return new Response(body, {
    status: cached.status,
    statusText: cached.statusText,
    headers: cached.headers || { 'content-type': cached.type === 'json' ? 'application/json' : 'text/plain' },
  });
};

const buildAxiosCacheKey = (method, url, params = {}) => {
  if (!url || !ASTRO_API_PATTERN.test(url)) return null;

  const normalizedParams = typeof params === 'string' ? params : JSON.stringify(params || {});
  return `AXIOS:${method.toUpperCase()}:${url}:${normalizedParams}`;
};

const installApiRequestCache = () => {
  if (typeof window === 'undefined' || window.__astroApiCacheInstalled) return;

  const originalFetch = window.fetch.bind(window);

  window.fetch = async (input, init = {}) => {
    const cacheKey = buildCacheKey(input, init);

    if (cacheKey && memoryCache.has(cacheKey)) {
      return createCachedResponse(memoryCache.get(cacheKey));
    }

    const response = await originalFetch(input, init);

    if (cacheKey && response.ok) {
      const contentType = response.headers.get('content-type') || '';

      if (contentType.includes('application/json')) {
        const body = await response.clone().json();
        memoryCache.set(cacheKey, {
          type: 'json',
          body,
          status: response.status,
          statusText: response.statusText,
          headers: { 'content-type': contentType },
        });
      } else {
        const body = await response.clone().text();
        memoryCache.set(cacheKey, {
          type: 'text',
          body,
          status: response.status,
          statusText: response.statusText,
          headers: { 'content-type': contentType },
        });
      }
    }

    return response;
  };

  const originalGet = axios.get.bind(axios);
  axios.get = async (url, config = {}) => {
    const cacheKey = buildAxiosCacheKey('get', url, config?.params);

    if (cacheKey && axiosCache.has(cacheKey)) {
      return axiosCache.get(cacheKey);
    }

    const response = await originalGet(url, config);

    if (cacheKey && response?.status >= 200 && response?.status < 300) {
      axiosCache.set(cacheKey, response);
    }

    return response;
  };

  window.__astroApiCacheInstalled = true;
};

export default installApiRequestCache;
export { installApiRequestCache };
