import { Box, Stack, Typography } from "@mui/material";

type AlbumPropsType = {
  albumName: string;
  albumYear: string;
};

const Album = ({ albumName, albumYear }: AlbumPropsType) => {
  return (
    <>
      <Box>
        <Stack>
          <Typography color="#F5F5F5" component="p">
            {albumName}
          </Typography>
          <Typography color="#8A8A8A" component="p">
            {albumYear}
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default Album;
