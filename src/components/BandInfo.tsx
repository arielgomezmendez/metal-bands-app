import { Typography, Box, Button, Stack } from "@mui/material";
import Skeleton from "@mui/material/Skeleton";
import { useEffect, useRef, useState } from "react";

type BandInfoPropsType = {
  bandDetails: any;
  trackId: string;
  trackName: string;
};

const BandInfo = ({ bandDetails, trackId, trackName }: BandInfoPropsType) => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const [showIframeSpotifyEmbed, setShowIframeSpotifyEmbed] = useState(false);

  //Manage the focus
  useEffect(() => {
    if (bandDetails != null) {
      headingRef.current?.focus();
    }
  }, [bandDetails]);

  return (
    <section
      className="bandInfo flex lg:flex-row md:flex-col max-sm:flex-col"
      style={{ marginLeft: "1rem", marginTop: "4rem" }}
    >
      <picture
        className="bandImg"
        style={{ width: "44%", aspectRatio: "1 / 1", borderRadius: "8px" }}
      >
        {bandDetails?.strArtistThumb ? (
          <img
            src={bandDetails?.strArtistThumb}
            alt={`Promotional photo of ${bandDetails?.bandDetails?.strArtist}`}
            style={{ width: "100%", height: "100%", borderRadius: "8px" }}
          />
        ) : (
          <Skeleton
            variant="rectangular"
            width="100%"
            height="100%"
            sx={{
              bgcolor: "grey.800",
              borderRadius: "8px",
            }}
          />
        )}
      </picture>

      <Box className="bandInfo flex flex-col items-start justify-center lg:gap-8 w-full lg:ml-20 ml-0">
        {/* Name of heavy metal band */}
        {bandDetails?.strArtist ? (
          <Typography
            ref={headingRef}
            tabIndex={-1}
            variant="h3"
            component="h1"
            className="bandName"
            color="#F5F5F5"
            sx={{ fontSize: "3rem" }}
          >
            {bandDetails?.strArtist}
          </Typography>
        ) : (
          <Skeleton
            className="mt-2 lg:mt-0"
            variant="rectangular"
            width={200}
            height="3rem"
            sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
          />
        )}

        {/* Genre, Country, Formed Year of heavy metal band*/}
        <dl
          className="flex lg:flex-row flex-col gap-8 lg:gap-18 mt-4 mb-4 lg:mt-0 lg:mb-0"
          style={{ alignItems: "flex-start" }}
        >
          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Genre
            </Typography>
            {bandDetails?.strGenre ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.strGenre}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={100}
              />
            )}
          </Stack>

          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Country
            </Typography>
            {bandDetails?.strCountry ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.strCountry}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={160}
              />
            )}
          </Stack>

          <Stack className="flex flex-col" sx={{ alignItems: "flex-start" }}>
            <Typography color="#8A8A8A" component="dt">
              Formed
            </Typography>
            {bandDetails?.intFormedYear ? (
              <Typography color="#F5F5F5" component="dd">
                {bandDetails?.intFormedYear}
              </Typography>
            ) : (
              <Skeleton
                sx={{ bgcolor: "grey.800", borderRadius: "8px" }}
                width={42}
              />
            )}
          </Stack>
        </dl>
        <Box
          aria-label="Button group"
          className="buttonGroup flex flex-row gap-4"
        >
          <Button
            sx={{
              backgroundColor: "transparent",
              color: "#1DB954",
              border: "solid 1.4px  #1DB954",
              "&.Mui-disabled": {
                opacity: 0.5,
                color: "#1DB954",
                border: "1.4px solid #1DB954",
                backgroundColor: "transparent",
              },
            }}
            aria-expanded={showIframeSpotifyEmbed}
            aria-controls="spotify-player"
            onClick={() => setShowIframeSpotifyEmbed(!showIframeSpotifyEmbed)}
            disabled={!trackId}
          >
            Listen now
          </Button>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#1A1A1A", color: "#F5F5F5" }}
            disabled
          >
            Share
          </Button>
        </Box>
        {showIframeSpotifyEmbed && (
          <iframe
            id="spotify-player"
            title={`Spotify player for ${trackName} of ${bandDetails.strArtist} `}
            src={`https://open.spotify.com/embed/track/${trackId}`}
            style={{ marginTop: "10px" }}
            width="100%"
            height="100"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          >
            <h1>Spotify</h1>
          </iframe>
        )}
      </Box>
    </section>
  );
};

export default BandInfo;
