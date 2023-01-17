import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH, TRIANGLE_WIDTH } from "./../constants/index";
export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_WIDTH)) * TRIANGLE_WIDTH + TRIANGLE_WIDTH / 2,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_WIDTH)) * TRIANGLE_WIDTH + TRIANGLE_WIDTH / 2,
  };

  if (coordinate.x > THUMBNAIL_WIDTH) coordinate.x = THUMBNAIL_WIDTH;
  if (coordinate.x === 0) coordinate.x = 1;

  if (coordinate.y > THUMBNAIL_HEIGHT) coordinate.y = THUMBNAIL_HEIGHT;
  if (coordinate.y === 0) coordinate.y = 1;

  return coordinate;
};
