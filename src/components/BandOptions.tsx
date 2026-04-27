import { Box, ButtonBase, Typography } from "@mui/material";
import { useState } from "react";

type BandOptionsPropsType = {
  bandOptions: string[];
  correctBand: string;
  selectedBand: string | null;
  setSelectedBand: React.Dispatch<React.SetStateAction<string | null>>;
};

const BandOptions = ({
  bandOptions,
  correctBand,
  selectedBand,
  setSelectedBand,
}: BandOptionsPropsType) => {
  const handleSelectedTrack = (e: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedBand(e.currentTarget.textContent?.trim() ?? "");
  };

  return (
    <Box
      sx={{
        margin: "0 auto",
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gap: 2,
        width: "60%",
      }}
    >
      {bandOptions.map((option) => {
        //const optionStyles = getOptionStyles(option.state);
        const isSelected = selectedBand === option;
        const isCorrect = option === correctBand;
        const isIncorrect = isSelected && !isCorrect;
        const hasAnswered = selectedBand !== null;
        return (
          <ButtonBase
            //key={option.id}
            key={option}
            onClick={handleSelectedTrack}
            disabled={hasAnswered}
            sx={{
              width: "100%",
              borderRadius: 3,
              overflow: "hidden",
              textAlign: "left",
              backgroundColor:
                hasAnswered && isCorrect
                  ? "#2e7d32"
                  : isIncorrect
                    ? "#b30000"
                    : "#111318",

              border: "2px solid #f5f5f5",

              boxShadow: isIncorrect
                ? "0 0 16px rgba(255, 0, 0, 0.35)"
                : "none",

              opacity: hasAnswered && !isCorrect && !isSelected ? 0.6 : 1,

              //...optionStyles,
              "&.Mui-focusVisible": {
                outline: "3px solid #D32F2F",
                outlineOffset: "2px",
              },
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                px: 1.8,
                py: 1.8,
                minHeight: 60,
              }}
            >
              <Typography
                sx={{
                  color: "#f5f5f5",
                  fontSize: "1.2rem",
                  fontWeight: 700,
                }}
              >
             
                {option}
              </Typography>
            </Box>
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default BandOptions;
