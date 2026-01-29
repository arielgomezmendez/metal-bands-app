import React, { useEffect, useState } from "react";
import { getMetalBandDiscographyFromAudioDB, getMetalBandFromAudioDB } from "../services/audiodb.service";
import { useParams } from "react-router-dom";

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails,setBandDetails]= useState<any>(null);
  const [bandDiscography,setBandDiscography]= useState<any>(null);

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const bandsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      //console.log(fectchBnadsAudioDb.artists);
      setBandDetails(bandsAudioDb.artists[0]);
    };
    fetchBandsAudioDb();
    const fetchBandDiscographyAudioDb = async () => {
      const bandDiscography = await getMetalBandDiscographyFromAudioDB(name ? name : "");
      console.log("Discografia: ",bandDiscography);
      setBandDiscography(bandDiscography);
    };    
    fetchBandDiscographyAudioDb();

  }, [name]);

  //console.log(bandDetails?.intBornYear);

  return (
    <>
      <h1 style={{ color: "white" }}>Banda</h1>
    </>
  );
};

export default BandDetails;
