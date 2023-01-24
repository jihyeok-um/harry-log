import { useEffect, useState } from "react";
import { TRIANGLE_MAX_HEIGHT, TRIANGLE_MIN_HEIGHT, TRIANGLE_WIDTH } from "../constants/triangle";
import { getCoordinate } from "../utils/utils";

export const useMakeRandomTriangle = (index: number) => {
  const [height, setHeight] = useState(0);
  const [rotatePercent, setRotatePercent] = useState(0);
  const [coordinate, setCoordinate] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setHeight(
      TRIANGLE_WIDTH *
        (Math.random() * (TRIANGLE_MAX_HEIGHT - TRIANGLE_MIN_HEIGHT) + TRIANGLE_MIN_HEIGHT)
    );
    setCoordinate(getCoordinate(index));
    setRotatePercent(Math.random());
  }, []);

  return {
    height,
    rotatePercent,
    coordinate,
  };
};
