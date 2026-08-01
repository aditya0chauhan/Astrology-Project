import { astroRequest } from "../services/astroService.js";

export const astroController = async (req, res) => {

  try {
    // Remove our backend prefix
    const endpoint = req.originalUrl.replace("/api/astro", "/api");

    const data = await astroRequest(endpoint);

    res.json(data);
  } catch (error) {
    console.error("Astro API Error:", error.message);

    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};