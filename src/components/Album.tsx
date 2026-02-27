import { Box, Skeleton, Stack, Typography } from "@mui/material";

type AlbumPropsType = {
  albumName: string;
  albumYear: string;
  albumImageUrl?: string;
};

const Album = ({ albumName, albumYear, albumImageUrl }: AlbumPropsType) => {
  return (
    <Box
      sx={{
        backgroundColor: "#1A1A1A",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: "8px",
        padding: "0.5rem",
        gap: "1rem",
      }}
    >
      {albumImageUrl ? (
        <>
        <img src={albumImageUrl} alt={`Studio album cover of ${albumName}`} />
        
        </>
        
      ) : (
        <Skeleton
          variant="rectangular"
          sx={{
            backgroundColor: "red",
            borderRadius: "8px",
            width: "64px",
            height: "64px",
          }}
        />
      )}
      <Stack
        sx={{
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
      </Stack>
    </Box>
  );
};

export default Album;
