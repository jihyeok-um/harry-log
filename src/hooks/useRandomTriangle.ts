import { useEffect, useState } from "react";
import { getCoordinate } from "../utils/utils";

const useRandomTriangle = (index: number) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  const getRandomWidth = () => {
    const newWidth = 30;
    setWidth(newWidth);
    return newWidth;
  };

  const getRandomHeight = (width: number) => {
    // height 1~3
    setHeight(width * (Math.random() * (3 - 1) + 1));
  };

  useEffect(() => {
    const width = getRandomWidth();
    getRandomHeight(width);
    setCoordinate(getCoordinate(index));
    setRotatePercent(Math.random());
  }, []);

  return {
    width,
    height,
    rotatePercent,
    coordinate,
  };
};

export default useRandomTriangle;
