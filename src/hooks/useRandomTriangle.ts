import { useEffect, useState } from "react";

const useRandomTriangle = (index: number) => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });
  const [rgbaValue, setRgbaValue] = useState([0, 0, 0, 0]);

  const getRandomWidth = () => {
    // width 50~100
    const newWidth = Math.random() * (100 - 50) + 50;
    setWidth(newWidth);
    return newWidth;
  };

  const getRandomHeight = (width: number) => {
    // height 1~3
    setHeight(width * (Math.random() * (3 - 1) + 1));
  };

  const getCoordinate = () => {
    setCoordinate({ x: (index % 32) * 50 - 50, y: (index / 32) * 50 - 50 });
  };

  const getRgbaValue = () => {};

  useEffect(() => {
    const width = getRandomWidth();
    getRandomHeight(width);
    getCoordinate();
    setRotatePercent(Math.random());
  }, []);

  return {
    width,
    height,
    rotatePercent,
    coordinate,
  };
};

interface getRgbaValueParams {
  width: number;
  height: number;
  coordinate: number;
}

export default useRandomTriangle;
