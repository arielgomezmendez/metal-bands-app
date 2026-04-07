export const getDataFromSpotifyApi = async (accessToken: string, endPoint:string) => {
  try {
    const response = await fetch(
      `https://api.spotify.com/v1/${endPoint}`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (!response.ok) {
      console.error("Error status response from Spotify API:", response);
      throw new Error("Error fetching data from Spotify API"); 
    }
    const data = await response.json();
    console.log(data);
    return data;
    
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
  }
};
