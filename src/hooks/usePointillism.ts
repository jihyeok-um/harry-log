import { useRef } from "react";
import {
  RGBA_ARRAY_SIZE,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_COUNT,
} from "../constants/triangle";
import { getCoordinate, getCurrentPixel } from "../utils/utils";
import { TRIANGLE_SIZE } from "./../constants/triangle";

export const usePointillism = (src: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = new Image();

  const createImageData = () => {
    const ctx = canvasRef.current?.getContext("2d", { willReadFrequently: true });
    ctx?.drawImage(image, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

    return ctx?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
  };

  const createTriangles = (rgba: number[][] | undefined) => {
    if (!canvasRef.current || !image || !rgba) return;

    for (let i = 0; i < TRIANGLE_COUNT; i++) {
      const ctx = canvasRef.current.getContext("2d");
      const coordinate = getCoordinate(i);
      const firstPoint = [coordinate.x, coordinate.y + Math.floor(Math.random() * TRIANGLE_SIZE)];
      const secondPoint = [coordinate.x + Math.floor(Math.random() * TRIANGLE_SIZE), coordinate.y];
      const thirdPoint = [
        coordinate.x + Math.floor(Math.random() * TRIANGLE_SIZE),
        coordinate.y + TRIANGLE_SIZE,
      ];
      const currentPixel = getCurrentPixel({
        x: coordinate.x,
        y: coordinate.y,
      });

      if (!ctx) continue;
      if (currentPixel >= 1600 * 900) continue;
      if (currentPixel <= 0) continue;

      ctx.beginPath();
      ctx.moveTo(firstPoint[0], firstPoint[1]);
      ctx.lineTo(secondPoint[0], secondPoint[1]);
      ctx.lineTo(thirdPoint[0], thirdPoint[1]);
      ctx.fillStyle = `rgba(${rgba[currentPixel][0]}, ${rgba[currentPixel][1]}, ${rgba[currentPixel][2]}, ${rgba[currentPixel][3]})`;
      ctx.fill();
    }
  };

  const createRgbaValues = (imageData: Uint8ClampedArray | undefined) => {
    const rgba: number[][] = [];
    if (!imageData) return;

    for (let i = 0; i < imageData.length; i += RGBA_ARRAY_SIZE) {
      rgba.push(Array.from(imageData.slice(i, i + RGBA_ARRAY_SIZE)));
    }

    return rgba;
  };

  image.addEventListener("load", () => {
    const imageData = createImageData();
    const rgba = createRgbaValues(imageData);
    createTriangles(rgba);
  });
  image.src = src;

  return {
    canvasRef,
  };
};
