import { Typography, Container, Box, Button, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useRef } from "react";

const BandInfo = (bandDetails: any) => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (bandDetails != null) {
      headingRef.current?.focus();
    }
  }, [bandDetails]);

  return (
    <section
      className="bandInfo flex lg:flex-row md:flex-col max-sm:flex-col"
      style={{ marginLeft: "1rem", marginTop: "4rem" }}
    >
      <picture
        className="bandImg"
        style={{ width: "44%", aspectRatio: "1 / 1", borderRadius: "8px" }}
      >
        {bandDetails?.bandDetails ? (
          <img
            src={bandDetails.bandDetails?.strArtistThumb}
            alt="Heavy metal band picture"
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{
              bgcolor: "grey.800",
              borderRadius: "8px",
            }}
          />
        )}
      </picture>

      <Box className="bandInfo flex flex-col items-start justify-center lg:gap-8 w-full lg:ml-20 ml-0">
        {/* Name of heavy metal band */}
        {bandDetails?.bandDetails?.strArtist ? (
          <Typography
            ref={headingRef}
            tabIndex={-1}
            variant="h3"
            component="h1"
            className="bandName"
            color="#F5F5F5"
            sx={{ fontSize: "3rem" }}
          >
            {bandDetails?.bandDetails?.strArtist}
          </Typography>
        ) : (
          <Skeleton
            className="mt-2 lg:mt-0"
            variant="rectangular"
            width={200}
            height="3rem"
            sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
          />
        )}

        {/* Genre, Country, Formed Year of heavy metal band*/}
        <dl
          className="flex flex-row gap-8 lg:gap-18 mt-4 mb-4 lg:mt-0 lg:mb-0"
          style={{ alignItems: "flex-start" }}
        >
          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Genre
            </Typography>
            {bandDetails?.bandDetails?.strGenre ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.bandDetails?.strGenre}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={100}
              />
            )}
          </Stack>

          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Country
            </Typography>
            {bandDetails?.bandDetails?.strCountry ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.bandDetails?.strCountry}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={160}
              />
            )}
          </Stack>

          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Formed
            </Typography>
            {bandDetails?.bandDetails?.intFormedYear ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.bandDetails?.intFormedYear}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={42}
              />
            )}
          </Stack>
        </dl>
        <Box
          aria-label="Button group"
          className="buttonGroup flex flex-row gap-4"
        >
          <Button
            variant="contained"
            sx={{ backgroundColor: "#E53935", color: "#F5F5F5" }}
          >
            Listen now
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1A1A1A", color: "#F5F5F5" }}
          >
            Share
          </Button>
        </Box>
      </Box>
    </section>
  );
};

export default BandInfo;
