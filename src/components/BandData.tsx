import { Stack, Typography } from "@mui/material";
import type { AlbumType } from "../pages/BandDetails";
import Album from "./Album";

export type BandDataProps = {
  bandDetails: any;
  bandDiscography: AlbumType[];
};

const BandData = ({ bandDetails, bandDiscography }: BandDataProps) => {
  return (
    <>
      <Stack
        className="flex flex-col gap-4"
       
        sx={{ marginTop: "2rem", marginLeft: "1rem", marginBottom: "4rem" }}
      >
        <Typography
          color="#F5F5F5"
          variant="h5"
          component="h2"
          className="flex flex-col"
          sx={{ alignItems: "flex-start"}}
        >
          Discography
        </Typography>
        {bandDiscography.map((album, index) => (
          <Album
            key={index}
            albumName={album?.strAlbum}
            albumYear={album?.intYearReleased}
          />
        ))}
        <Stack
        className="mt-6"
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <Typography color="#F5F5F5" variant="h5" component="h2">
            Biography
          </Typography>
          <Typography color="#8A8A8A" component="p" sx={{textAlign: 'justify'}}>
            {bandDetails?.strBiographyEN}
          </Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default BandData;
