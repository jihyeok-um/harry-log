import { useRef, useState } from "react";
import {
  RESOLUTION,
  RGBA_ARRAY_SIZE,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_COUNT,
} from "../constants/triangle";
import { getCoordinate, getRgbaPixel } from "../utils/utils";
import { TRIANGLE_SIZE } from "./../constants/triangle";
import { CanvasStatus, DrawTriangleParams, TriangleInfo } from "./../types/index";
import { randomInt } from "./../utils/utils";

export const usePointillism = (src: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [canvasStatus, setCanvasStatus] = useState<CanvasStatus>("none");
  const image = new Image();

  const createImageData = (): Uint8ClampedArray | undefined => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

    if (!ctx) return;

    ctx.drawImage(image, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

    return ctx.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
  };

  const createTriangleInfo = (triangleIndex: number): TriangleInfo => {
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

  const createRgbaValues = (imageData: Uint8ClampedArray | undefined) => {
    if (!imageData) return;

    const rgbas: number[][] = Array.from({ length: imageData.length }, () => []);
    let rgbaFirstIndex = 0;

    return rgbas.map((el, i) => {
      rgbaFirstIndex = i * 4;

      return Array.from(imageData.slice(rgbaFirstIndex, rgbaFirstIndex + RGBA_ARRAY_SIZE));
    });
  };

  const drawDimmer = () => {
    if (!canvasRef.current) return;

    const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

    if (!ctx) return;

    ctx.fillStyle = "rgba(0,0,0,0.4)";
    ctx.fillRect(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);
  };

  const drawPointillism = () => {
    if (canvasStatus !== "none") return;

    setCanvasStatus("loading");
    const imageData = createImageData();
    const rgba = createRgbaValues(imageData);
    const triangleDrawCount = Array.from({ length: TRIANGLE_COUNT }, () => 0);

    triangleDrawCount.forEach((el, i) => {
      const triangleInfo = createTriangleInfo(i);
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
