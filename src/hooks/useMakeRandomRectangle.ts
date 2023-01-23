import { useEffect, useState } from "react";
export const useMakeRandomRectangle = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  useEffect(() => {}, []);

  return {
    width,
    height,
    coordinate,
  };
};
