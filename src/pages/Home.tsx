import { useEffect, useState } from "react";
import CardBand from "../components/CardBand";
import HeroSection from "../components/HeroSection";
import { Skeleton, Typography } from "@mui/material";
import SearchBand from "../components/SearchBand";

//import { getMetalBandsFromLastFm } from "../services/lastfm.service";
//import { getMetalBandFromAudioDB } from "../services/audiodb.service";

type BandType = {
  name: string;
  country: string;
  genre: string;
  imgUrl: string;
};

type MockBandType = {
  name: string;
  country: string;
  genre: string;
  image: string;
};

const Home = () => {
  const [bands, setBands] = useState<Array<BandType>>([]);
  //const [bandImgUrls, setBandImgUrls] = useState<String>("");
  const [filteredBandsState, setFilteredBands] = useState<Array<BandType>>([]);

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
        (band: MockBandType) => ({
          name: band.name,
          country: band.country,
          genre: band.genre,
          imgUrl: band.image,
        }),
      );
      setBands(bandsFromMock);
      setFilteredBands(bandsFromMock);
      //console.log(bandsFromMock);
    };
    fetchMockBands();
  }, []);

  const filteredBands = (value: string) => {
    const searchValue = value.trim().toLowerCase();

    if (!searchValue) {
      return bands;
    }

    return bands.filter((band) =>
      band.name.toLowerCase().includes(searchValue),
    );
  };

  const handleSearch = (value: string) => {
    setFilteredBands(filteredBands(value));
  };
  

  return (
    <>
      <HeroSection />
      <SearchBand onSearch={handleSearch} />
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
        {bands.length != 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
            {filteredBandsState.map((band) => (
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
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
            {Array.from({ length: 8 }).map((_, index) => (
              <li key={index}>
                <Skeleton
                  variant="rectangular"
                  height={400}
                  sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                />
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  );
};

export default Home;
