import { RgbaContext, RgbaDispatcherContext } from "./../context/RgbaContext";
import { useContext, useRef, useState } from "react";
import { RGBA_ARRAY_SIZE } from "../constants/pointillism";

export const useRgba = ({ thumbnailSource, canvasWidth, canvasHeight }: useRgbaProps) => {
  const setRgba = useContext(RgbaDispatcherContext);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const image = new Image();

  const drawImage = () => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

      if (ctx) {
        ctx.drawImage(image, 0, 0, canvasWidth, canvasHeight);
      }
    }
  };

  const getPixelData = (
    canvasRef: React.RefObject<HTMLCanvasElement>
  ): Uint8ClampedArray | undefined => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });

      if (ctx) {
        const PixelData = ctx.getImageData(0, 0, canvasWidth, canvasHeight).data;
        setRgba(PixelData);
        return PixelData;
      }
    }
  };

  const handleGetImageRgbaDate = () => {
    drawImage();
    getPixelData(canvasRef);
  };

  image.addEventListener("load", handleGetImageRgbaDate);
  if (thumbnailSource) image.src = thumbnailSource;

  return {
    canvasRef,
    getPixelData,
  };
};

interface useRgbaProps {
  thumbnailSource: string | null;
  canvasWidth: number;
  canvasHeight: number;
}
