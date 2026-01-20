const BASE_URL_AUDIODB =
    "https://www.theaudiodb.com/api/v1/json/123/search.php?s=Slipknot";

  export const getMetalBandFromAudioDB = async () => {
    try {
      const response = await fetch(BASE_URL_AUDIODB);

      if (!response.ok) {
        throw new Error("Error al obtener detalles de la banda");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching band details:", error);
    }
  };