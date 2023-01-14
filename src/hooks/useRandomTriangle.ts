import { useEffect, useState } from "react";

const useRandomTriangle = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [randomValue] = useState(0);

  const getRandomWidth = () => {
    const newWidth = Math.random() * 200;
    setWidth(newWidth);
    return newWidth;
  };

  const getRandomHeight = (width: number) => {
    setHeight(width * (Math.random() * 3));
  };

  const getRandomRotatePercent = () => {
    setRotatePercent(Math.random());
  };

  useEffect(() => {
    const width = getRandomWidth();
    getRandomHeight(width);
    getRandomRotatePercent();
  }, []);

  return {
    width,
    height,
    rotatePercent,
  };
};

export default useRandomTriangle;
