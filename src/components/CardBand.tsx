import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {
  Button,
  CardActionArea,
  CardActions,
  CardMedia,
  Typography,
} from "@mui/material";

type CardBandProps = {
  name?: string;
  country?: string;
  genre?: string;
  imageUrl?: string;
};

const CardBand = (props: CardBandProps) => {
  const { name, country, genre, imageUrl } = props;
  return (
    <>
      <Card sx={{ maxWidth: 320 }}>
        <CardActionArea>
          <CardMedia component="img" height="140" image={imageUrl} alt={name} />
          <CardContent style={{ backgroundColor: "#1A1A1A" }}>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              color="#F5F5F5"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="#8A8A8A" className="flex flex-row  gap-2">
              <span>{country}</span>
              <span>|</span>
              <span>{genre}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "#1A1A1A" }}>
          <Button
            sx={{
              background: "#E53935",
              color: "#F5F5F5",
              width: "90%",
              margin: "10px auto",
            }}
          >
            View band
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardBand;
