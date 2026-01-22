import { Container, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section>
        <Container>
          <Typography component="h1" variant="h2">
            Forged in Steel
          </Typography>
          <Typography component="p">
            The greatest heavy metal bands in the world
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
