export const getCoordinate = (index: number) => {
  const coordinate = { x: Math.floor(index % 53) * 30 + 15, y: Math.floor(index / 53) * 30 + 15 };

  if (coordinate.x > 1600) coordinate.x = 1600;
  if (coordinate.x === 0) coordinate.x = 1;

  if (coordinate.y > 900) coordinate.y = 900;
  if (coordinate.y === 0) coordinate.y = 1;

  return coordinate;
};
