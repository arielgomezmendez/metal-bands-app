import { Container, Typography } from "@mui/material";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <section>
        <Container>
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            sx={{ fontWeight: "bold", marginTop: "4%" }}
            color="#F5F5F5"
          >
            Forged in Steel
          </Typography>
          <Typography component="p" color="#B0B0B0">
            The greatest heavy metal bands in the world
          </Typography>
        </Container>
      </section>
    </>
  );
};

export default HeroSection;
