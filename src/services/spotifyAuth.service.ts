import type { SpotifyTokenType } from "../pages/BandDetails";

export const getSpotifyAccessToken = async (): Promise<SpotifyTokenType> => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SPOTIFY_API_URL}/api/spotify-token`,
    );
    if (!response.ok) {
      throw new Error("Error ");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error en getSpotifyToken:", error);
    throw error;
  }
};
