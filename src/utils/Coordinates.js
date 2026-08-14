import { API_BASE } from "../config/api";

const Coordinates = async (place) => {
  try {
    const response = await fetch(
      `${API_BASE}/location/coordinates?place=${encodeURIComponent(place)}`
    );

    const data = await response.json();

    if (!response.ok || !data.success || !data.location) {
      throw new Error(data.message || "Location not found");
    }

    return data.location;

  } catch (error) {
    console.error("Location Error:", error);
    throw error;
  }
};

export default Coordinates;