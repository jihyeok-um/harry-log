import { THUMBNAIL_WIDTH } from "../constants/pointillism";
import { Coordinate } from "../types/index";

export const getCoordinate = (index: number, triangleGap: number, canvasWidth: number) => {
  const coordinate = {
    x: Math.floor(index % (canvasWidth / triangleGap)) * triangleGap,
    y: Math.floor(index / (canvasWidth / triangleGap)) * triangleGap,
  };

  return coordinate;
};

export const getRgbaPixel = (coordinate: Coordinate, canvasWidth: number) => {
  return Math.floor(coordinate.x + coordinate.y * canvasWidth);
};
