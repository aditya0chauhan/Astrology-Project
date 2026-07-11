const cache = new Map();

export default {
  has(key) {
    return cache.has(key);
  },
  get(key) {
    return cache.get(key);
  },
  set(key, value) {
    cache.set(key, value);
  },
  clear() {
    cache.clear();
  }
};
