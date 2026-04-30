/* https://spotify-server-rosy-delta.vercel.app/api/deezer-search */ // URL in Vercel

/* "http://localhost:3000/api/deezer-search" */ // Local URL

import { ButtonBase, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { getRandomItem } from "../helpers/arrayHelper";
import Player from "../components/Player";
import BandOptions from "../components/BandOptions";
import Feedback from "../components/Feedback";

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
  const [bandOptions, setBandOptions] = useState<string[]>([]);
  const [correctBand, setCorrectBand] = useState<string>("");
  const [selectedBand, setSelectedBand] = useState<string | null>(null);

  const fetchDezeerData = async (): Promise<DeezerTrack[]> => {
    try {
      const response = await fetch("https://spotify-server-rosy-delta.vercel.app/api/deezer-search");
      const data = await response.json(); // A list of songs of a selected band
      console.log("Data: ", data);
      //Get a random track of the band
      if (data?.tracks.length > 0) {
        const randomTrack = getRandomItem(data.tracks as DeezerTrack[]); // Get a random index of array and then select the band
        setSelectedTrack(randomTrack);
        setBandOptions(data.bandOptions);
        setCorrectBand(data.correctBand);
      }
      return data;
    } catch (error) {
      console.error("Error fetching the data from server: ", error);
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
      <Typography
        component="p"
        gutterBottom
        sx={{ marginBottom: "4%" }}
        color="#8A8A8A"
      >
        Listen to the track and choose the correct band
      </Typography>
      <Card
        elevation={0}
        className="flex flex-col"
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
          <BandOptions
            bandOptions={bandOptions}
            correctBand={correctBand}
            selectedBand={selectedBand}
            setSelectedBand={setSelectedBand}
          />
          <Feedback selectedBand={selectedBand} correctBand={correctBand}/>
          {/* Next Riff button */}
          <ButtonBase
            disabled={!selectedBand}
            onClick={() => {
              fetchDezeerData();
              setSelectedBand(null);
              setIsPlaying(false);
            }}
            sx={{
              borderRadius: "8px",
              width: "60%",
              marginTop: 4,
              height: 40,
              backgroundColor: "#D32F2F",
              color: "#fff",
              px: 1.8,
              py: 1.8,
              "&:hover": {
                backgroundColor: "#B71C1C",
              },
              "&.Mui-disabled": {
                backgroundColor: "#555",
                color: "#aaa",
              },
              "&.Mui-focusVisible": {
                outline: "3px solid #D32F2F",
                outlineOffset: "2px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#f5f5f5",
                fontSize: "1.2rem",
                fontWeight: 700,
              }}
            >
              Next Riff
            </Typography>
          </ButtonBase>
        </CardContent>
      </Card>
    </>
  );
};

export default GuessTheRiff;
