import { useRef, useState } from "react";
import {
  RESOLUTION,
  RGBA_ARRAY_SIZE,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_COUNT,
  TRIANGLE_SIZE,
} from "../constants/triangle";
import { CanvasStatus, DrawTriangleParams, TriangleInfo } from "./../types/index";
import { randomInt } from "../utils/randomInt";
import { getCoordinate, getRgbaPixel } from "../utils/triangle";

export const usePointillism = (src: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = new Image();
  const [canvasStatus, setCanvasStatus] = useState<CanvasStatus>("none");

  const getImageData = (): Uint8ClampedArray | undefined => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

      if (ctx) {
        ctx.drawImage(image, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);
        return ctx.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
      }
    }
  };

  const getTriangleInfo = (triangleIndex: number): TriangleInfo => {
    const coord = getCoordinate(triangleIndex);
    const rgbaPixel = getRgbaPixel({ x: coord.x, y: coord.y });
    const firstPoint = { x: coord.x, y: coord.y + randomInt(TRIANGLE_SIZE) };
    const secondPoint = { x: coord.x + randomInt(TRIANGLE_SIZE), y: coord.y };
    const thirdPoint = { x: coord.x + randomInt(TRIANGLE_SIZE), y: coord.y + TRIANGLE_SIZE };

    return { firstPoint, secondPoint, thirdPoint, rgbaPixel };
  };

  const drawTriangles = ({ triangleInfo, rgba }: DrawTriangleParams) => {
    if (!canvasRef.current || !rgba) return;

    const { firstPoint, secondPoint, thirdPoint, rgbaPixel } = triangleInfo;
    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;
    if (rgbaPixel >= RESOLUTION) return;
    if (rgbaPixel <= 0) return;

    ctx.beginPath();
    ctx.moveTo(firstPoint.x, firstPoint.y);
    ctx.lineTo(secondPoint.x, secondPoint.y);
    ctx.lineTo(thirdPoint.x, thirdPoint.y);
    ctx.fillStyle = `rgba(${rgba[rgbaPixel][0]}, ${rgba[rgbaPixel][1]}, ${rgba[rgbaPixel][2]}, ${rgba[rgbaPixel][3]})`;
    ctx.fill();
  };

  const getRgbaValues = (imageData: Uint8ClampedArray | undefined) => {
    if (!imageData) return;

    const rgbas: number[][] = Array.from({ length: imageData.length }, () => []);
    let rgbaFirstIndex = 0;

    return rgbas.map((el, i) => {
      rgbaFirstIndex = i * 4;
      return Array.from(imageData.slice(rgbaFirstIndex, rgbaFirstIndex + RGBA_ARRAY_SIZE));
    });
  };

  const drawDimmer = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

      if (ctx) {
        ctx.fillStyle = "rgba(0,0,0,0.4)";
        ctx.fillRect(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);
      }
    }
  };

  const drawPointillism = () => {
    if (canvasStatus !== "none") return;

    setCanvasStatus("loading");

    const imageData = getImageData();
    const rgba = getRgbaValues(imageData);
    const triangleDrawCount = Array.from({ length: TRIANGLE_COUNT }, () => 0);

    triangleDrawCount.forEach((el, i) => {
      const triangleInfo = getTriangleInfo(i);
      drawTriangles({ triangleInfo, rgba });
    });
    // drawDimmer();
    setCanvasStatus("done");
  };

  image.addEventListener("load", drawPointillism);
  image.src = src;

  return {
    canvasRef,
    canvasStatus,
  };
};
