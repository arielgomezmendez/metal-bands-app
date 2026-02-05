import { Box, Typography } from "@mui/material";

type AlbumPropsType = {
  albumName: string;
  albumYear: string;
};

const Album = ({ albumName, albumYear }: AlbumPropsType) => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#1A1A1A",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "1rem",
          borderRadius: "8px",
          gap: "0.5rem",
        }}
      >
        <Typography color="#F5F5F5" component="p">
          {albumName}
        </Typography>
        <Typography color="#8A8A8A" component="p">
          {albumYear}
        </Typography>
      </Box>
    </>
  );
};

export default Album;
