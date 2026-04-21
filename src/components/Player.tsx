import { Box, IconButton, LinearProgress } from "@mui/material";
import React from "react";
import type { DeezerTrack } from "../pages/GuessTheRift";

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
  timePorgress
}: PlayerPropsType) => {
  return (
    <>
      <Box>
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
        <LinearProgress
          value={duration ? (timePorgress / duration) * 100 : 0}
          variant="determinate"
          aria-label="Song playback progress bar"
          valueBuffer={100}
        />
      </Box>
    </>
  );
};

export default Player;
