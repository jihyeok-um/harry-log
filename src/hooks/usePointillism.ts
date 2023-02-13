import { useRgba } from "./useRgba";
import { RgbaContext } from "./../context/RgbaContext";
import { NOISE_STRENGTH } from "../constants/pointillism";
import { useContext, useRef, useState } from "react";
import { RESOLUTION, THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/pointillism";
import { CanvasStatus, DrawTriangleParams, TriangleInfo } from "./../types/index";
import { randomInt } from "../utils/randomInt";
import { getCoordinate, getRgbaPixel } from "../utils/triangle";

export const usePointillism = ({
  thumbnailSource,
  noiseStrength,
  canvasWidth,
  canvasHeight,
}: usePointillismParams) => {
  const rgba = useContext(RgbaContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = new Image();
  const [canvasStatus, setCanvasStatus] = useState<CanvasStatus>("none");
  const { getPixelData } = useRgba({ thumbnailSource, canvasWidth, canvasHeight });

  const drawImage = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

      if (ctx) {
        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
      }
    }
  };

  const getTriangleInfo = (triangleIndex: number): TriangleInfo => {
    const coord = getCoordinate(
      triangleIndex,
      NOISE_STRENGTH[noiseStrength].TRIANGLE_GAP,
      canvasWidth
    );
    const currentPixel = getRgbaPixel({ x: coord.x, y: coord.y }, canvasWidth);

    const firstPoint = {
      x: coord.x,
      y: coord.y + randomInt(NOISE_STRENGTH[noiseStrength].TRIANGLE_SIZE),
    };
    const secondPoint = {
      x: coord.x + randomInt(NOISE_STRENGTH[noiseStrength].TRIANGLE_SIZE),
      y: coord.y,
    };
    const thirdPoint = {
      x: coord.x + randomInt(NOISE_STRENGTH[noiseStrength].TRIANGLE_SIZE),
      y: coord.y + NOISE_STRENGTH[noiseStrength].TRIANGLE_SIZE,
    };

    return { firstPoint, secondPoint, thirdPoint, currentPixel };
  };

  const drawTriangles = ({ triangleInfo, rgba }: DrawTriangleParams) => {
    if (!canvasRef.current || !rgba) return;

    const { firstPoint, secondPoint, thirdPoint, currentPixel } = triangleInfo;
    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;
    if (currentPixel >= RESOLUTION) return;
    if (currentPixel <= 0) return;

    ctx.beginPath();
    ctx.moveTo(firstPoint.x, firstPoint.y);
    ctx.lineTo(secondPoint.x, secondPoint.y);
    ctx.lineTo(thirdPoint.x, thirdPoint.y);

    ctx.fillStyle = `rgba(${rgba[currentPixel * 4]}, ${rgba[currentPixel * 4 + 1]}, ${
      rgba[currentPixel * 4 + 2]
    }, ${rgba[currentPixel * 4 + 3]})`;

    ctx.fill();
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

    drawImage();
    const triangleDrawCount = Array.from({
      length: NOISE_STRENGTH[noiseStrength].TRIANGLE_COUNT,
    });

    if (rgba && rgba.length !== canvasWidth * canvasHeight) {
      const pixelData = getPixelData(canvasRef);

      triangleDrawCount.forEach((el, i) => {
        const triangleInfo = getTriangleInfo(i);
        drawTriangles({ triangleInfo, rgba: pixelData });
      });
      setCanvasStatus("done");
      return;
    }

    triangleDrawCount.forEach((el, i) => {
      const triangleInfo = getTriangleInfo(i);
      drawTriangles({ triangleInfo, rgba });
    });
    setCanvasStatus("done");
  };

  image.addEventListener("load", drawPointillism);
  if (thumbnailSource) image.src = thumbnailSource;

  return {
    canvasRef,
    canvasStatus,
  };
};

interface usePointillismParams {
  thumbnailSource: string | null;
  noiseStrength: number;
  canvasWidth: number;
  canvasHeight: number;
}
