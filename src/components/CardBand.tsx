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
      <Card sx={{ maxWidth: 320}}>
        <CardActionArea>
          <CardMedia component="img"  image={imageUrl} alt={name} sx={{height:'200', width:'100%', objectFit:'contain'}}/>
          <CardContent style={{ backgroundColor: "#1A1A1A" }} className="flex flex-col items-start">
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              color="#F5F5F5"
              className="pl-1"
            >
              {name}
            </Typography>
            <Typography variant="body2" color="#8A8A8A" className="flex flex-row  gap-2 pl-1">
              <span>{genre}</span>
              <span>|</span>
              <span>{country}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions style={{ backgroundColor: "#1A1A1A" }}>
          <Button
            sx={{
              marginLeft: "5%",
              marginBottom: "5%",
              background: "#E53935",
              color: "#F5F5F5",
              width: "90%",
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
