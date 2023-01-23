import {
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_GAP,
  TRIANGLE_WIDTH,
} from "./../constants/index";
import { Coordinate } from "./../types/index";

export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH - TRIANGLE_WIDTH / 2,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH - TRIANGLE_WIDTH / 2,
  };

  if (coordinate.x < 0) coordinate.x = 0;
  if (coordinate.y < 0) coordinate.y = 0;
  if (coordinate.x >= THUMBNAIL_WIDTH) coordinate.x = THUMBNAIL_WIDTH - 1;
  if (coordinate.y >= THUMBNAIL_HEIGHT) coordinate.y = THUMBNAIL_HEIGHT - 1;

  return coordinate;
};

export const getCurrentPixel = (coordinate: Coordinate) => {
  const currentPixel = Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);
};
