import React, { useEffect, useState } from "react";
import CardBand from "../components/CardBand";
import HeroSection from "../components/HeroSection";
import Header from "../components/Header";

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
    };
    fetchMockBands();
  }, []);

  return (
    <>
      <body>
        <Header />
        <HeroSection />
        <main>
          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 m-6">
            {bands.map((band) => (
              <CardBand
                key={band.name}
                name={band.name}
                country={band.country}
                genre={band.genre}
                imageUrl={band.imgUrl}
              />
            ))}
          </section>
        </main>
        <footer style={{backgroundColor:"#1A1A1A", width:"100%", textAlign:"start", marginTop:"4rem"}}>
          <p style={{color:"#8A8A8A", height:"80px", display:"flex", alignItems:"center", justifyContent:"center"}}>
            <small>© 2026 Metal Archives. All rights reserved.</small>
          </p>
        </footer>
      </body>
    </>
  );
};

export default Home;
