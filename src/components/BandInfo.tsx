import { Typography, Container, Box, Button, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";

const BandInfo = (bandDetails: any) => {
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
        <Container
          className="flex flex-row gap-8 lg:gap-18 m-4"
          sx={{ alignItems: "flex-start" }}
          disableGutters
        >
          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Genre
            </Typography>
            {bandDetails?.bandDetails?.strGenre ? (
              <Typography color="#F5F5F5" component="p">
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
            <Typography color="#8A8A8A" component="p">
              Country
            </Typography>
            {bandDetails?.bandDetails?.strCountry ? (
              <Typography color="#F5F5F5" component="p">
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
            <Typography color="#8A8A8A" component="p">
              Fromed
            </Typography>
            {bandDetails?.bandDetails?.intFormedYear ? (
              <Typography color="#F5F5F5" component="p">
                {bandDetails?.bandDetails?.intFormedYear}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={42}
              />
            )}
          </Stack>
        </Container>
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
