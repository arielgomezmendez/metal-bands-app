/* https://spotify-server-rosy-delta.vercel.app/api/deezer-search */ // URL in Vercel

/* "http://localhost:3000/api/deezer-search" */ // Local URL

import { Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getRandomItem } from "../helpers/arrayHelper";
import Player from "../components/Player";
import BandOptions from "../components/BandOptions";

export type DeezerTrack = {
  id: number;
  title: string;
  preview: string;
  artistName: string | null;
};

const GuessTheRiff = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);
  const [timePorgress, setTimeProgress] = useState(0);
  const [selectedTrack, setSelectedTrack] = useState<DeezerTrack | null>(null);

  const fetchDezeerData = async (): Promise<DeezerTrack[]> => {
    try {
      const response = await fetch(
        "https://spotify-server-rosy-delta.vercel.app/api/deezer-search",
      );
      const data = await response.json();
      //Get a random track of the band
      if (data.length > 0) {
        const randomTrack = getRandomItem(data as DeezerTrack[]); // Get a random index of array and then select the band
        setSelectedTrack(randomTrack);
      }
      return data as DeezerTrack[];
    } catch (error) {
      console.error("Error fetching the data from server");
      return [];
    }
  };

  useEffect(() => {
    fetchDezeerData();
  }, []);

  //Function to handle the Play/Pause
  const handleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (!audioRef?.current) return;
    setTimeProgress(audioRef?.current?.currentTime);
  };

  //Get the real duration of track
  const getTrackDuration = () => {
    if (audioRef?.current) {
      setDuration(audioRef?.current?.duration);
    }
  };

  return (
    <>
      <Typography
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold", marginTop: "4%" }}
        color="#F5F5F5"
      >
        GUESS THE RIFF
      </Typography>
      <Card
        elevation={0}
        sx={{
          maxWidth: 700,
          width: "100%",
          margin: "0 auto",
          backgroundColor: "#1A1A1A",
          borderRadius: 4,
          border: "1px solid rgba(255,255,255,0.05)",
          boxShadow: "0 10px 30px rgba(0,0,0,0.35)",
        }}
      >
        <CardContent
          sx={{
            padding: 4,
            "&:last-child": {
              paddingBottom: 4,
            },
          }}
        >
          <Player
            selectedTrack={selectedTrack}
            getTrackDuration={getTrackDuration}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            handleTimeUpdate={handleTimeUpdate}
            handleAudio={handleAudio}
            isPlaying={isPlaying}
            duration={duration}
            timePorgress={timePorgress}
          />
          <BandOptions />
        </CardContent>
      </Card>
    </>
  );
};

export default GuessTheRiff;
