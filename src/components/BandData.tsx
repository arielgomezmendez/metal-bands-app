import { Stack, Typography } from "@mui/material";

const BandData = (bandDetails: any) => {
  //console.log("BandDetails en BandData: ", bandDetails?.bandDetails);

  return (
    <section>
      <Stack spacing={2} sx={{ marginTop: "2rem", marginLeft: "1rem" }}>
        <Typography color="#F5F5F5" variant="h3" component="h2">
          Biography
        </Typography>
        <Typography color="#8A8A8A" component="p">
          {bandDetails?.bandDetails?.strBiographyEN}
        </Typography>
      </Stack>
    </section>
  );
};

export default BandData;
