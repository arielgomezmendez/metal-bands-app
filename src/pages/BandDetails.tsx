import { useEffect, useState } from "react";
import {
  getMetalBandFromAudioDB,
} from "../services/audiodb.service";
import { useParams } from "react-router-dom";
import BandInfo from "../components/BandInfo";
import BandData from "../components/BandData";
import { Container } from "@mui/material";
import { getSpotifyAccessToken } from "../services/spotifyAuth.service";
import { getDataFromSpotifyApi } from "../services/spotifyApi.service";

export type AlbumType = {
  name: string;
  release_date: string;
  images: {
    url: string;
  }[];
};

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails, setBandDetails] = useState<any>(null);
  const [bandDiscography, setBandDiscography] = useState<AlbumType[]>([]);
  const [spotifyToken, setSpotifyToken] = useState<string>("");
  const [bandId, setBandId] = useState<string>("");
  //const [storedToken, setStoredToken] = useState<string | null>("");

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const bandsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      //console.log("bandsAudioDb: ",bandsAudioDb.artists[0]);
      setBandDetails(bandsAudioDb.artists[0]);
    };

    fetchBandsAudioDb();
    /* Get  the las 2 albums of heavy metal band */
    /*const fetchBandDiscographyAudioDb = async () => {
      const bandDiscography = await getMetalBandDiscographyFromAudioDB(
        name ? name : "",
      );
      setBandDiscography(bandDiscography?.album);
    };
    fetchBandDiscographyAudioDb();*/

    //Request to Spotify API for access token
    const getToken = async () => {
      try {
        const token = await getSpotifyAccessToken();
        sessionStorage.setItem("spotify_AccessToken", token);
      } catch (error) {
        console.error("Error fetching Spotify access token:", error);
      }
    };

    const storedToken = sessionStorage.getItem("spotify_AccessToken"); // Store the access token in session storage to avoid unnecessary requests on page reloads.

    if (storedToken) {
      setSpotifyToken(storedToken);
    } else {
      console.log("No Spotify Access Token in state yet.");
      getToken();
    }

    // Fetch band ID.
    const fetchFromSpotify = async () => {
      try {
        if (storedToken) {
          const dataFromSpotify = await getDataFromSpotifyApi(
            storedToken,
            `search?q=${encodeURIComponent(name ? name : "")}&type=artist`,
          );
          setBandId(dataFromSpotify.artists?.items[0]?.id);
          console.log("Band ID from Spotify: ", dataFromSpotify?.artists?.items[0]?.id);
        }
      } catch (error) {
        console.error("Error fetching data from Spotify API:", error);
      }
    };

    fetchFromSpotify();
  }, [name]);

  // Fetch the band's albums from Spotify API using the band ID obtained from the previous request.
  useEffect(() => {
    if (!bandId || !spotifyToken) return;
    const fetchAlbums = async () => {
      try {
        const getAlbums = await getDataFromSpotifyApi(
          spotifyToken,
          `artists/${bandId}/albums?include_groups=album&limit=10`,
        );
        setBandDiscography(getAlbums?.items);
        console.log(
          "Band discography from Spotify: ",
          getAlbums?.items,
        );
      } catch (error) {
        console.error(
          "Error fetching data from Spotify API with band ID:",
          error,
        );
      }
    };
    fetchAlbums();
  }, [bandId]);
  
  return (
    <>
      <Container className="flex flex-col">
        <BandInfo bandDetails={bandDetails} />
        <BandData bandDetails={bandDetails} bandDiscography={bandDiscography} />
      </Container>
    </>
  );
};

export default BandDetails;
