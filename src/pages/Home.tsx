import React, { useEffect, useState } from "react";
import CardBand from "../components/CardBand";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";
import { Typography } from "@mui/material";

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
