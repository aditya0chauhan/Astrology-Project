const Coordinates = async (place) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        place
      )}&limit=5`
    );

    const data = await response.json();

    if (!data || data.length === 0) {
      throw new Error("Location not found");
    }

    return {
      latitude: Number(data[0].lat),
      longitude: Number(data[0].lon),
      displayName: data[0].display_name,
    };
  } catch (error) {
    console.error("Location Error:", error);
    throw error;
  }
};

export default Coordinates;