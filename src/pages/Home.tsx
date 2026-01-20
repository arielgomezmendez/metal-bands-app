import React, { useEffect, useState } from "react";
import CardBand from "../components/CardBand";
import { getMetalBandsFromLastFm } from "../services/lastfm.service";
import { getMetalBandFromAudioDB } from "../services/audiodb.service";

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

    /*const fetchBandsAudioDb = async () => {
      const fectchBnadsAudioDb = await getMetalBandFromAudioDB();
      console.log(fectchBnadsAudioDb.artists[0].strArtistThumb);  
    };
    fetchBandsAudioDb();*/

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
    }
    fetchMockBands();
  }, []);

  return (
    <div className="flex">
      {bands.map((band) => (
        <CardBand
          key={band.name}
          name={band.name}
          country={band.country}
          genre={band.genre}
          imageUrl={band.imgUrl}
        />
      ))}
    </div>
  );
};

export default Home;
