import { useEffect, useState } from "react";
import { getCoordinate } from "../utils/utils";
import { TRIANGLE_WIDTH } from "./../constants/index";

const useRandomTriangle = (index: number) => {
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setHeight(TRIANGLE_WIDTH * (Math.random() * (3 - 1) + 1));
    setCoordinate(getCoordinate(index));
    setRotatePercent(Math.random());
  }, []);

  return {
    height,
    rotatePercent,
    coordinate,
  };
};

export default useRandomTriangle;
