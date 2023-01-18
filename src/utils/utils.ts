import { THUMBNAIL_WIDTH, TRIANGLE_GAP, TRIANGLE_WIDTH } from "./../constants/index";

export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH - TRIANGLE_WIDTH / 2,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH - TRIANGLE_WIDTH / 2,
  };

  if (coordinate.x < 0) coordinate.x = 0;
  if (coordinate.y < 0) coordinate.y = 0;

  return coordinate;
};
