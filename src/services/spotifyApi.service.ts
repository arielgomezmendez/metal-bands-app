//https://api.spotify.com/v1/artists/{id}/albums
//https://api.spotify.com/v1/search?q=slipknot&type=artist

import { getSpotifyAccessToken } from "./spotifyAuth.service";

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
      if (response.status === 401) {
        const newToken = await getSpotifyAccessToken();
        console.log("New token obtained: ", newToken);
        return newToken;
      }
      throw new Error("Error fetching data from Spotify API");
      
    }
    const token = await response.json();
    //console.log("Spotify API data:", data);
    return token;
    
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
  }
};
