export const getDataFromSpotifyApi = async (accessToken: string) => {
  try {
    const response = await fetch(
      "https://api.spotify.com/v1/artists/0OdUWJ0sBjDrqHygGUXeCF",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    if (!response.ok) {
      throw new Error("Error fetching data from Spotify API");
    }
    const data = await response.json();
    console.log("Spotify API data:", data);
  } catch (error) {
    console.error("Error fetching data from Spotify API:", error);
  }
};
