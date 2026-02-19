export const getSpotifyAccessToken = async (): Promise<string> => {

  const clientId = import.meta.env.VITE_SPOTIFY_CLIENT_ID; // Get Spotify Client ID from environment variables.
  const clientSecret = import.meta.env.VITE_SPOTIFY_CLIENT_SECRET; //Get Spotify Client Secret from environment variables.

  const base64 = btoa(`${clientId}:${clientSecret}`); // Encode the client ID and secret in Base64 for the Authorization tocken request.

  const response = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      Authorization: `Basic ${base64}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: "grant_type=client_credentials",
  });

  const data = await response.json();

  return data.access_token;
};


