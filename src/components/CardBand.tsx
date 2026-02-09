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
import { Link as RouterLink} from "react-router-dom";

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
          <CardMedia component="img"  image={imageUrl} alt={`Promotional photo of ${name}`} sx={{height:'200', width:'100%', objectFit:'contain'}}/>
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
            {/* Genre and country of heavy metal band */}
            <Typography variant="body2" color="#8A8A8A" component="p" sx={{marginLeft:"4px"}}>
              <span>{genre}</span>
              <span style={{padding:"4px"}}>|</span>
              <span>{country}</span>
            </Typography>
          </CardContent>
        <CardActions style={{ backgroundColor: "#1A1A1A" }}>
          <Button
           component={RouterLink}
           to={`/band/${encodeURIComponent(name ? name : "")}`}
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
