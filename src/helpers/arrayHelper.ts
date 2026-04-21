import type { DeezerTrack } from "../pages/GuessTheRift";

 export const getRandomItem = (array: DeezerTrack[]): DeezerTrack => {
    return array[Math.floor(Math.random() * array.length)];
  };