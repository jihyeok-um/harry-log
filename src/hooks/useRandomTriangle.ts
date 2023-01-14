import { useEffect, useState } from "react";

const useRandomTriangle = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const getRandomWidth = () => {
    const newWidth = Math.random() * 100;
    setWidth(newWidth);
    return newWidth;
  };

  const getRandomHeight = (width: number) => {
    setHeight(width * (Math.random() * 3));
  };

  useEffect(() => {
    const width = getRandomWidth();
    getRandomHeight(width);
    setRotatePercent(Math.random());
    setCoordinate({ x: Math.random() * 1600, y: Math.random() * 900 });
  }, []);

  return {
    width,
    height,
    rotatePercent,
    coordinate,
  };
};

export default useRandomTriangle;
