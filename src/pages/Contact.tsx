import { Box, Link, Typography } from "@mui/material";

const Contact = () => {
  return (
    <Box
      component="section"
      aria-labelledby="contact-title"
      sx={{
        maxWidth: 720,
        margin: "0 auto",
        px: 3,
        py: 8,
        textAlign: "left",
      }}
    >
      <Typography
        id="contact-title"
        component="h1"
        variant="h3"
        gutterBottom
        sx={{ fontWeight: "bold" }}
        color="#F5F5F5"
      >
        Contact
      </Typography>

      <Typography component="p" sx={{ color: "#8A8A8A", mb: 3 }}>
        Got a band recommendation, feedback, or a riff idea? Send a message and
        keep the metal flowing.
      </Typography>

      <Typography component="p" sx={{ color: "#F5F5F5" }}>
        Email:{" "}
        <Link href="mailto:contact@metalbands.app" color="#d32f2f">
          contact@metalbands.app
        </Link>
      </Typography>
    </Box>
  );
};

export default Contact;
