import { Typography, Container, Box, Button, Stack } from "@mui/material";

const BandInfo = (bandDetails: any) => {
  return (
    <section
      className="bandInfo flex lg:flex-row md:flex-col max-sm:flex-col"
      style={{ marginLeft: "1rem", marginTop: "4rem"}}
    >
      <picture
        className="bandImg"
        style={{ width: "44%", height: "44%", borderRadius: "8px" }}
      >
        <img
          src={bandDetails.bandDetails?.strArtistThumb}
          alt="Heavy metal band picture"
          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
        />
      </picture>
      <Box
        className="bandInfo flex flex-col items-start justify-center lg:gap-8 w-full lg:ml-20 ml-0"
      >
        {/* Name of heavy metal band */}
        <Typography
          variant="h3"
          component="h1"
          className="bandName"
          color="#F5F5F5"
          sx={{ fontSize: "3rem" }}
        >
          {bandDetails?.bandDetails?.strArtist}
        </Typography>

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
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strGenre}
            </Typography>
          </Stack>
          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Country
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strCountry}
            </Typography>
          </Stack>
          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Fromed
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.intFormedYear}{" "}
            </Typography>
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
