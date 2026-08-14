export const getCoordinates = async (req, res) => {
  try {
    const { place } = req.query;

    if (!place) {
      return res.status(400).json({
        success: false,
        message: "Place is required",
      });
    }

    const url =
      `https://nominatim.openstreetmap.org/search` +
      `?format=json` +
      `&q=${encodeURIComponent(place)}` +
      `&limit=5`;

    const response = await fetch(url, {
      headers: {
        "User-Agent": "ManojVedicAstro/1.0",
        "Accept": "application/json",
      },
    });

    if (!response.ok) {
      return res.status(502).json({
        success: false,
        message: "Location service failed",
      });
    }

    const data = await response.json();

    if (!data || data.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Location not found",
      });
    }

    res.status(200).json({
      success: true,
      location: {
        latitude: Number(data[0].lat),
        longitude: Number(data[0].lon),
        displayName: data[0].display_name,
      },
    });
  } catch (error) {
    console.error("Location API Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch location",
    });
  }
};