import {
  Box,
  Button,
  Card,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

type DeezerTrack = {
  id: number;
  title: string;
  preview: string;
  artistName: string | null;
};

const GuessTheRift = () => {
  const [deezerData, setDezeerData] = useState(null);
  const [preview, setPreview] = useState<string>("");
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const fetchDezeerData = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/deezer-search");
      const data = await response.json();
      console.log("Data: ", data[0]?.preview);
      setDezeerData(data);
      setPreview(data[0]?.preview);
      return data;
    } catch (error) {
      console.error("Error fetching the data from server");
    }
  };

  useEffect(() => {
    fetchDezeerData();
    //console.log(deezerData[0]?.preview)
  }, []);

//Function to handle the Play/Pause
  const handleAudio = () => {
    console.log("Time: ", audioRef.current?.currentTime);
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
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
          <Box>
            {preview && (
              <audio
                ref={audioRef}
                src={preview}
                onEnded={() => setIsPlaying(false)}
              />
            )}
            <IconButton
              onClick={handleAudio}
              disabled={!preview}
              aria-label={isPlaying ? "Pause preview" : "Play preview"}
              sx={{
                width: 72,
                height: 72,
                backgroundColor: "#D32F2F",
                color: "#fff",
                "&:hover": {
                  backgroundColor: "#B71C1C",
                },
                "&.Mui-disabled": {
                  backgroundColor: "#555",
                  color: "#aaa",
                },
              }}
            >
              {" "}
              {isPlaying ? "Pause" : "Play"}
            </IconButton>
          </Box>
        </CardContent>
      </Card>
    </>
  );
};

export default GuessTheRift;
