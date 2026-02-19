import { useEffect, useState } from "react";
import CardBand from "../components/CardBand";
import HeroSection from "../components/HeroSection";
import { Typography } from "@mui/material";
import { getSpotifyAccessToken } from "../services/spotifyAuth.service";
import { getDataFromSpotifyApi } from "../services/spotifyApi.service";

//import { getMetalBandsFromLastFm } from "../services/lastfm.service";
//import { getMetalBandFromAudioDB } from "../services/audiodb.service";

type BandType = {
  name: string;
  country: string;
  genre: string;
  imgUrl: string;
};

const Home = () => {
  const [bands, setBands] = useState<Array<BandType>>([]);
  //const [bandImgUrls, setBandImgUrls] = useState<String>("");
  const [spotifyToken, setSpotifyToken] = useState<string>("");

  useEffect(() => {
    //Request to real APIs
    /*const fetchBandsLastFm = async () => {
      const data = await getMetalBandsFromLastFm();
      setBands(data.topartists.artist);
      console.log(data.topartists.artist);
    };
    fetchBandsLastFm();*/

    //Using mock data
    const fetchMockBands = async () => {
      const mockData = await import("../assets/mock.json");
      const bandsFromMock: Array<BandType> = mockData.artists.artist.map(
        (band: any) => ({
          name: band.name,
          country: band.country,
          genre: band.genre,
          imgUrl: band.image,
        }),
      );
      setBands(bandsFromMock);
      //console.log(bandsFromMock);
    };
    fetchMockBands();

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

    const fetchFromSpotify = async () => {
      try {
        if (storedToken) {
          const dataFromSpotify = await getDataFromSpotifyApi(storedToken);
          console.log("Data from Spotify API:", dataFromSpotify);
        }
      } catch (error){
        console.error("Error fetching data from Spotify API:", error);
      }
    };

    fetchFromSpotify();
  }, []);

  return (
    <>
      <HeroSection />
      <section aria-labelledby="bands-titel">
        <Typography
          id="bands-titel"
          component="h2"
          variant="h4"
          gutterBottom
          sx={{ fontWeight: "bold", marginTop: "4%" }}
          color="#F5F5F5"
        >
          Bands
        </Typography>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
          {bands.map((band) => (
            <li key={band.name}>
              <CardBand
                name={band.name}
                country={band.country}
                genre={band.genre}
                imageUrl={band.imgUrl}
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
