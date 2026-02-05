import React, { useEffect, useState } from "react";
import { getMetalBandDiscographyFromAudioDB, getMetalBandFromAudioDB } from "../services/audiodb.service";
import { useParams } from "react-router-dom";
import BandInfo from "../components/BandInfo";
import BandData from "../components/BandData";

export type AlbumType = {
  strAlbum: string;
  intYearReleased: string;
};

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails,setBandDetails]= useState<any>(null);
  const [bandDiscography,setBandDiscography]= useState<AlbumType[]>([]);

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const bandsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      //console.log("bandsAudioDb: ",bandsAudioDb.artists[0]);
      setBandDetails(bandsAudioDb.artists[0]);
    };
    
    fetchBandsAudioDb();
    /* Get  the las 2 albums of heavy metal band */
    const fetchBandDiscographyAudioDb = async () => {
      const bandDiscography = await getMetalBandDiscographyFromAudioDB(name ? name : "");
      setBandDiscography(bandDiscography?.album);
    };    
    fetchBandDiscographyAudioDb();

  }, [name]);

  console.log("Banda: ",bandDetails);

  return (
    <>
      <BandInfo bandDetails={bandDetails}/>
      <BandData bandDetails={bandDetails} bandDiscography={bandDiscography}/>
    </>
  );
};

export default BandDetails;
