import { Typography, Container, Box, Button } from "@mui/material";

const BandInfo = (bandDetails: any) => {
  console.log("BandDetails en BandInfo: ", bandDetails?.bandDetails);
  return (
    <section className="bandInfo flex flex-row" style={{ marginLeft: "1rem", marginTop: "4rem" }}>
      <picture
        className="bandImg"
        style={{ maxWidth: "30%", maxHeight: "30%", borderRadius: "8px" }}
      >
        <img
          src={bandDetails.bandDetails?.strArtistThumb}
          alt="Heavy metal band picture"
          style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" }}
        />
      </picture>
      <Container
        className="bandInfo flex "
        disableGutters
        sx={{
          width: "60%",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          className="bandName"
          color="#F5F5F5"
          sx={{ fontSize: "3rem" }}
        >
          {bandDetails?.bandDetails?.strArtist}
        </Typography>
        <Container
          className="flex flex-row gap-20"
          sx={{ alignItems: "flex-start" }}
          disableGutters
        >
          <Box className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Genre
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strGenre}
            </Typography>
          </Box>
          <Box className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Country
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strCountry}
            </Typography>
          </Box>
          <Box className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="p">
              Fromed
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.intFormedYear}{" "}
            </Typography>
          </Box>
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
      </Container>
    </section>
  );
};

export default BandInfo;
