import { THUMBNAIL_WIDTH, TRIANGLE_GAP, TRIANGLE_WIDTH } from "./../constants/index";
export const getCoordinate = (index: number) => {
  const coordinate = {
    x: Math.floor(index % (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH + TRIANGLE_WIDTH / 2,
    y: Math.floor(index / (THUMBNAIL_WIDTH / TRIANGLE_GAP)) * TRIANGLE_WIDTH + TRIANGLE_WIDTH / 2,
  };

  return coordinate;
};
