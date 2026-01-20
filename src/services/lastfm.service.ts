const API_KEY = import.meta.env.VITE_LASTFM_API_KEY;
const BASE_URL_LASTFM = "https://ws.audioscrobbler.com/2.0/";
export const getMetalBandsFromLastFm = async () => {
  try {
    const response = await fetch(
      `${BASE_URL_LASTFM}?method=tag.gettopartists&tag=heavy+metal&api_key=${API_KEY}&format=json`,
    );

    if (!response.ok) {
      throw new Error("Error al obtener bandas");
    }
    const data = await response.json();
    //console.log(data);
    return data;
  } catch (error) {
    console.error("Error fetching metal bands:", error);
  }
};
