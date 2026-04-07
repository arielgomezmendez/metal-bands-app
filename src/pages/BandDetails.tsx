import { useEffect, useState } from "react";
import { getMetalBandFromAudioDB } from "../services/audiodb.service";
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

export type SpotifyTokenType = {
  access_token: string;
  expires_in: number;
  token_type: string;
};

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails, setBandDetails] = useState<any>(null);
  const [bandDiscography, setBandDiscography] = useState<AlbumType[]>([]);
  const [spotifyToken, setSpotifyToken] = useState<string>("");
  const [bandId, setBandId] = useState<string>("");

  let token: SpotifyTokenType;

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const bandsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      setBandDetails(bandsAudioDb?.artists[0]);
    };

    fetchBandsAudioDb();

    //Request to Spotify API for access token
    const fetchSpotifyData = async () => {
      try {
        token = await getSpotifyAccessToken();
        setSpotifyToken(token?.access_token);
      
        const dataFromSpotify = await getDataFromSpotifyApi(
          token?.access_token,
          `search?q=${encodeURIComponent(name ? name : "")}&type=artist`,
        );
        setBandId(dataFromSpotify.artists?.items[0]?.id);
      } catch (error) {
        console.error("Error fetching data from Spotify API:", error);
      }
    };
    fetchSpotifyData();
  }, [name]);

  // Fetch the band's albums from Spotify API using the band ID obtained from the previous request.
  useEffect(() => {
    if (!bandId) return;
    const fetchAlbums = async () => {
      try {
        const getAlbums = await getDataFromSpotifyApi(
          spotifyToken,
          `artists/${bandId}/albums?include_groups=album&limit=10`,
        );
        setBandDiscography(getAlbums?.items);
        console.log("Band discography from Spotify: ", getAlbums?.items);
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
