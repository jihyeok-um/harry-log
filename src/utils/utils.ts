import { THUMBNAIL_WIDTH, TRIANGLE_GAP } from "../constants/triangle";
import { Coordinate } from "./../types/index";

export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_GAP,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_GAP,
  };

  return coordinate;
};

export const getRgbaPixel = (coordinate: Coordinate) => {
  return Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);
};

export const randomInt = (max: number, min: number = 0) => {
  return Math.floor(Math.random() * max - min) + min;
};
