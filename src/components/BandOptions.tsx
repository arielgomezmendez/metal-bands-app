import { Box, ButtonBase, Typography } from "@mui/material";

/*const bandOptions = [
  { id: "a", name: "Megadeth", state: "default" },
  { id: "b", name: "Slayer", state: "default" },
  { id: "c", name: "Metallica", state: "default" },
  { id: "d", name: "Anthrax", state: "default" },
];*/

type BandOptionsPropsType = {
  bandOptions: string[];
};

// Set the styles of button with possible name bands accoriding the states
const getOptionStyles = (state: string) => {
  switch (state) {
    case "selected-wrong":
      return {
        backgroundColor: "#b30000",
        border: "2px solid #f5f5f5",
        boxShadow: "0 0 16px rgba(255, 0, 0, 0.35)",
      };
    case "correct":
      return {
        backgroundColor: "#2e7d32",
        border: "2px solid #f5f5f5",
      };
    default:
      return {
        backgroundColor: "#111318",
        border: "2px solid #f5f5f5",
      };
  }
};

const BandOptions = ({bandOptions}:BandOptionsPropsType) => {
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
        return (
          <ButtonBase
            //key={option.id}
            key={option}
            sx={{
              width: "100%",
              borderRadius: 3,
              overflow: "hidden",
              textAlign: "left",
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
                {/*option.name*/}
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
