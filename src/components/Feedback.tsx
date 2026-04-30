import { Box, Typography } from "@mui/material";

type FeedbackProps = {
  selectedBand: string | null;
  correctBand: string;
};

const Feedback = ({ selectedBand, correctBand }: FeedbackProps) => {
  if (!selectedBand) return null;

  const isCorrect = selectedBand === correctBand;

  return (
    <Box
      sx={{
        mt: 4,
        p: 3,
        borderRadius: 3,
        backgroundColor: "#1b1d1f",
        textAlign: "center",
      }}
    >
      <Typography
        component="p"
        sx={{
          color: isCorrect ? "#4caf50" : "#d32f2f",
          fontWeight: 900,
          fontStyle: "italic",
          letterSpacing: 4,
          textTransform: "uppercase",
          fontSize: "1.5rem",
          mb: 2,
        }}
      >
        {isCorrect ? "Correct" : "Incorrect"}
      </Typography>

      <Typography sx={{ color: "#aaa" }}>
        {isCorrect ? (
          <>
            You selected <strong>{selectedBand}</strong>. Great job!
          </>
        ) : (
          <>
            You selected <strong>{selectedBand}</strong>. The correct band is{" "}
            <strong>{correctBand}</strong>.
          </>
        )}
      </Typography>
    </Box>
  );
};

export default Feedback;