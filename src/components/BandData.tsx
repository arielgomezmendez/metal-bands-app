import { Skeleton, Stack, Typography } from "@mui/material";
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
          sx={{ alignItems: "flex-start" }}
        >
          Latest album releases
        </Typography>

        {bandDiscography.length > 0
          ? bandDiscography.map((album, index) => (
              <Album
                key={index}
                albumName={album?.strAlbum}
                albumYear={album?.intYearReleased}
              />
            ))
          : Array.from({ length: 2 }).map((_, index) => (
              <Skeleton
                key={index}
                variant="rectangular"
                height={88}
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
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

          {bandDetails?.strBiographyEN ? (
            <Typography
              color="#8A8A8A"
              component="p"
              sx={{ textAlign: "justify" }}
            >
              {bandDetails?.strBiographyEN}
            </Typography>
          ) : (
            <>
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", bgcolor: "grey.800", width: "100%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", bgcolor: "grey.800", width: "100%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", bgcolor: "grey.800", width: "100%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", bgcolor: "grey.800", width: "100%" }}
              />
              <Skeleton
                variant="text"
                sx={{ fontSize: "1rem", width: "80%", bgcolor: "grey.800" }}
              />
            </>
          )}
        </Stack>
      </Stack>
    </>
  );
};

export default BandData;
