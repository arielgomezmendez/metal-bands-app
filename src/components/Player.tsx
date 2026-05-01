import { Box, IconButton, LinearProgress } from "@mui/material";
import React from "react";
import type { DeezerTrack } from "../pages/GuessTheRiff";

type PlayerPropsType = {
  selectedTrack: DeezerTrack | null;
  getTrackDuration: () => void;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  audioRef: React.RefObject<HTMLAudioElement | null>;
  handleTimeUpdate: () => void;
  handleAudio: () => void;
  isPlaying: boolean;
  duration: number | null;
  timePorgress: number;
};

const Player = ({
  selectedTrack,
  getTrackDuration,
  setIsPlaying,
  audioRef,
  handleTimeUpdate,
  handleAudio,
  isPlaying,
  duration,
  timePorgress,
}: PlayerPropsType) => {
  return (
    <Box
      className="flex flex-row gap-2 mb-6 mx-auto p-4 rounded-2xl"
      sx={{ width: "60%", backgroundColor: "rgba(255, 255, 255, 0.10)" , boxShadow:"0 0 30px rgba(183,28,28,0.4)"}}
    >
      {selectedTrack?.preview && (
        <audio
          onLoadedMetadata={getTrackDuration} // Event of audio object that load the track metadata
          ref={audioRef}
          src={selectedTrack?.preview}
          onEnded={() => setIsPlaying(false)}
          onTimeUpdate={handleTimeUpdate}
        />
      )}
      <IconButton
        onClick={handleAudio}
        disabled={!selectedTrack?.preview}
        aria-label={isPlaying ? "Pause preview" : "Play preview"}
        sx={{
          width: { xs: 48, sm: 58 },
          height: { xs: 48, sm:58  },
          fontWeight:"bold",
          fontSize: "1rem",
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
      <LinearProgress
        className="h-2 flex-1  mt-5 md:mt-8"
        sx={{
          borderRadius: 4,
          backgroundColor: "#555",
          "& .MuiLinearProgress-bar": {
            backgroundColor: "#D32F2F", //
          },
        }}
        value={duration ? (timePorgress / duration) * 100 : 0}
        variant="determinate"
        aria-label="Song playback progress bar"
        valueBuffer={100}
      />
    </Box>
  );
};

export default Player;
