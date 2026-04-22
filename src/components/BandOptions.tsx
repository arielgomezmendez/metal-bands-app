import { Box, ButtonBase, Typography } from "@mui/material";

const bandOptions = [
  { id: "a", label: "A", name: "Megadeth", state: "selected-wrong" },
  { id: "b", label: "B", name: "Slayer", state: "default" },
  { id: "c", label: "C", name: "Metallica", state: "correct" },
  { id: "d", label: "D", name: "Anthrax", state: "default" },
];

const getOptionStyles = (state: string) => {
  switch (state) {
    case "selected-wrong":
      return {
        backgroundColor: "#b30000",
        border: "3px solid #f5f5f5",
        boxShadow: "0 0 16px rgba(255, 0, 0, 0.35)",
      };
    case "correct":
      return {
        backgroundColor: "#2e7d32",
        border: "3px solid transparent",
      };
    default:
      return {
        backgroundColor: "#111318",
        border: "3px solid transparent",
      };
  }
};

const BandOptions = () => {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1fr 1fr",
        },
        gap: 2,
        width: "100%",
      }}
    >
      {bandOptions.map((option) => {
        const optionStyles = getOptionStyles(option.state);

        return (
          <ButtonBase
            key={option.id}
            disableRipple
            sx={{
              width: "100%",
              borderRadius: 3,
              overflow: "hidden",
              textAlign: "left",
              ...optionStyles,
            }}
          >
            <Box
              sx={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                gap: 2,
                px: 2.5,
                py: 2.5,
                minHeight: 96,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: 1.5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 800,
                  fontSize: "1.25rem",
                  backgroundColor:
                    option.state === "default" ? "#05070a" : "#f5f5f5",
                  color: option.state === "default" ? "#8a8f98" : "#111",
                  flexShrink: 0,
                }}
              >
                {option.label}
              </Box>

              <Typography
                sx={{
                  color: "#f5f5f5",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  lineHeight: 1.1,
                }}
              >
                {option.name}
              </Typography>
            </Box>
          </ButtonBase>
        );
      })}
    </Box>
  );
};

export default BandOptions;
