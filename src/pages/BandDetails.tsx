import React, { useEffect, useState } from "react";
import { getMetalBandFromAudioDB } from "../services/audiodb.service";
import { useParams } from "react-router-dom";

const BandDetails = () => {
  const { name } = useParams();
  const [bandDetails,setBandDetails]= useState<unknown>(null);

  useEffect(() => {
    const fetchBandsAudioDb = async () => {
      const fectchBnadsAudioDb = await getMetalBandFromAudioDB(name ? name : "");
      console.log(fectchBnadsAudioDb.artists);
      setBandDetails(fectchBnadsAudioDb);
    };
    fetchBandsAudioDb();
  }, [name]);

  console.log(bandDetails);

  return (
    <>
      <h1 style={{ color: "white" }}>Banda</h1>
    </>
  );
};

export default BandDetails;
