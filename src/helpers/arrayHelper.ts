import type { DeezerTrack } from "../pages/GuessTheRiff";

 export const getRandomItem = (array: DeezerTrack[]): DeezerTrack => {
    return array[Math.floor(Math.random() * array.length)];
  };