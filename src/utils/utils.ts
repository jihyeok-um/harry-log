import { THUMBNAIL_WIDTH, TRIANGLE_GAP } from "../constants/triangle";
import { Coordinate } from "./../types/index";

export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_GAP,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_GAP,
  };

  return coordinate;
};

export const getCurrentPixel = (coordinate: Coordinate) => {
  return Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);
};
