import { THUMBNAIL_WIDTH } from "../constants/pointillism";
import { Coordinate } from "../types/index";

export const getCoordinate = (index: number, triangleGap: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / triangleGap)) * triangleGap,
    y: Math.floor(index / (THUMBNAIL_WIDTH / triangleGap)) * triangleGap,
  };

  return coordinate;
};

export const getRgbaPixel = (coordinate: Coordinate) => {
  return Math.floor(coordinate.x + coordinate.y * THUMBNAIL_WIDTH);
};
