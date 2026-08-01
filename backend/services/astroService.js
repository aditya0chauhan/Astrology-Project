const ASTRO_BASE_URL = "https://api.jyotishamastroapi.com";
const ASTRO_API_KEY = process.env.ASTRO_API_KEY;
export async function astroRequest(endpoint) {

  const response = await fetch(`${ASTRO_BASE_URL}${endpoint}`, {
    headers: {
      key: ASTRO_API_KEY,
      "Content-Type": "application/json",
    },
    
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Astro API Error");
  }

  return data;
}