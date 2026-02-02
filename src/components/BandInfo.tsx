import { Typography, Container, Box, ButtonGroup, Button } from "@mui/material";

import React from "react";

const BandInfo = (bandDetails: any) => {
  console.log("BandDetails en BandInfo: ", bandDetails?.bandDetails);
  return (
    <section className="bandInfo flex flex-row">
      <picture
        className="bandImg"
        style={{ maxWidth: "30%", maxHeight: "30%" }}
      >
        <img
          src={bandDetails.bandDetails?.strArtistThumb}
          alt="Heavy metal band picture"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
      </picture>
      <Container
        className="bandInfo flex "
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
          className="nameBand"
          color="#F5F5F5"
          sx={{ fontSize: "3rem", width: "20%" }}
        >
          {bandDetails?.bandDetails?.strArtist}
        </Typography>
        <Container className="flex flex-row">
          <Box>
            <Typography color="#8A8A8A" component="p">
              Genre
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strGenre}
            </Typography>
          </Box>
          <Box>
            <Typography color="#8A8A8A" component="p">
              Country
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.strCountry}
            </Typography>
          </Box>
          <Box>
            <Typography color="#8A8A8A" component="p">
              Fromed
            </Typography>
            <Typography color="#F5F5F5" component="p">
              {bandDetails?.bandDetails?.intFormedYear}{" "}
            </Typography>
          </Box>
        </Container>
        <ButtonGroup>
          <Button>Listen now</Button>
          <Button>Share</Button>
        </ButtonGroup>
      </Container>
    </section>
  );
};

export default BandInfo;
