import { Stack, Typography } from "@mui/material";
import type { AlbumType } from "../pages/BandDetails";
import Album from "./Album";

export type BandDataProps = {
  bandDetails: any;
  bandDiscography: AlbumType[];
};

const BandData = ({ bandDetails, bandDiscography }: BandDataProps) => {
  console.log("BandDetails en BandData: ", bandDetails);
  //console.log("Discografia: ",bandDiscography);

  return (
    <section>
      <Stack
        spacing={2}
        sx={{ marginTop: "2rem", marginLeft: "1rem", marginBottom: "4rem" }}
      >
        <Typography color="#F5F5F5" variant="h5" component="h2">
          Discography
        </Typography>
        {bandDiscography.map((album, index) => (
          <Album
            key={index}
            albumName={album?.strAlbum}
            albumYear={album?.intYearReleased}
            
            />
        ))}
        <Stack spacing={2} sx={{ marginTop: "2rem", marginLeft: "1rem" }}>
          <Typography color="#F5F5F5" variant="h5" component="h2">
            Biography
          </Typography>
          <Typography color="#8A8A8A" component="p">
            {bandDetails?.strBiographyEN}
          </Typography>
        </Stack>
      </Stack>
    </section>
  );
};

export default BandData;
