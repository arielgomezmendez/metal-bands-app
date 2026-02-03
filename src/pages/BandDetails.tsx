import React, { useEffect, useState } from "react";
import { getMetalBandDiscographyFromAudioDB, getMetalBandFromAudioDB } from "../services/audiodb.service";
import { useParams } from "react-router-dom";
import BandInfo from "../components/BandInfo";
import BandData from "../components/BandData";

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails,setBandDetails]= useState<any>(null);
  const [bandDiscography,setBandDiscography]= useState<any>(null);

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const bandsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      //console.log(bandsAudioDb.artists[0]);
      setBandDetails(bandsAudioDb.artists[0]);
    };
    //console.log("Banda: ",bandDetails);
    fetchBandsAudioDb();
    const fetchBandDiscographyAudioDb = async () => {
      const bandDiscography = await getMetalBandDiscographyFromAudioDB(name ? name : "");
      //console.log("Discografia: ",bandDiscography);
      setBandDiscography(bandDiscography);
    };    
    fetchBandDiscographyAudioDb();

  }, [name]);

  //console.log(bandDetails?.intBornYear);

  return (
    <>
      <BandInfo bandDetails={bandDetails}/>
      <BandData/>
    </>
  );
};

export default BandDetails;
