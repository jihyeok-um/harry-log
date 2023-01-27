import { useRef } from "react";
import {
  RESOLUTION,
  RGBA_ARRAY_SIZE,
  THUMBNAIL_HEIGHT,
  THUMBNAIL_WIDTH,
  TRIANGLE_COUNT,
} from "../constants/triangle";
import { getCoordinate, getRgbaPixel } from "../utils/utils";
import { TRIANGLE_SIZE } from "./../constants/triangle";
import { DrawTriangleParams, TriangleInfo } from "./../types/index";
import { randomInt } from "./../utils/utils";

export const usePointillism = (src: string) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = new Image();

  const createImageData = (): Uint8ClampedArray | undefined => {
    const ctx = canvasRef.current?.getContext("2d", { willReadFrequently: true });
    ctx?.drawImage(image, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

    return ctx?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
  };

  const createTriangleInfo = (triangleIndex: number): TriangleInfo => {
    const coordinate = getCoordinate(triangleIndex);
    const firstPoint = { x: coordinate.x, y: coordinate.y + randomInt(TRIANGLE_SIZE) };
    const secondPoint = { x: coordinate.x + randomInt(TRIANGLE_SIZE), y: coordinate.y };
    const thirdPoint = {
      x: coordinate.x + randomInt(TRIANGLE_SIZE),
      y: coordinate.y + TRIANGLE_SIZE,
    };
    const rgbaPixel = getRgbaPixel({
      x: coordinate.x,
      y: coordinate.y,
    });

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

    const rgba: number[][] = new Array(RESOLUTION);

    rgba.map((pixelRgba, i) => (pixelRgba = Array.from(imageData.slice(i, i + RGBA_ARRAY_SIZE))));

    return rgba;
  };

  const drawPointillism = () => {
    const imageData = createImageData();
    const rgba = createRgbaValues(imageData);
    const triangleDrawCount = new Array(TRIANGLE_COUNT);

    triangleDrawCount.forEach((el, i) => {
      const triangleInfo = createTriangleInfo(i);
      drawTriangles({ triangleInfo, rgba });
    });
  };

  image.addEventListener("load", drawPointillism);
  image.src = src;

  return {
    canvasRef,
  };
};
