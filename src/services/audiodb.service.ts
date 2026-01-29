const BASE_URL_AUDIODB =
  "https://www.theaudiodb.com/api/v1/json/123/search.php?s=";

const BASE_URL_DISCOGRAPHY =
  "https://www.theaudiodb.com/api/v1/json/123/discography.php?s=";

export const getMetalBandFromAudioDB = async (name: string) => {
  try {
    const response = await fetch(
      `${BASE_URL_AUDIODB}${encodeURIComponent(name)}`,
    );
    //console.log("URL: ", `${BASE_URL_AUDIODB}${encodeURIComponent(name)}`);

    if (!response.ok) {
      throw new Error("Error fetching band details");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching band details:", error);
  }
};

export const getMetalBandDiscographyFromAudioDB = async (name: string) => {
  try {
    const response = await fetch(
      `${BASE_URL_DISCOGRAPHY}${encodeURIComponent(name)}`,
    );
    if (!response.ok) {
      throw new Error("Error fetching band discography");
    }
    const data = await response.json();
      return data;
  } catch (error) {
    console.error("Error fetching band discography:", error);
  }
};
//console.log("URL: ", `${BASE_URL_DISCOGRAPHY}${encodeURIComponent(name)}`);
