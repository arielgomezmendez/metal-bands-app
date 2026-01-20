import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button, CardActionArea, CardActions, CardMedia, Typography } from "@mui/material";

type CardBandProps = {
  name?: string;
  country?: string;
  genre?: string;
  imageUrl?: string;
};

const CardBand = (props:CardBandProps) => {
  const { name, country, genre, imageUrl } = props;
  return (
    <>
      <Card sx={{ maxWidth: 320 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={imageUrl}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {country}
             <br />
            {genre}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          View band
        </Button>
      </CardActions>
    </Card>
    </>
  );
};

export default CardBand;
