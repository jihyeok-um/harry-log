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
        return PixelData;
      }
    }
  };

  const getRgbaValues = (pixelData: Uint8ClampedArray | undefined) => {
    if (!pixelData) return;

    let rgbaFirstIndex = 0;
    const rgbas: number[][] = Array.from({ length: pixelData.length }, () => []);
    const rgbaData = rgbas.map((el, i) => {
      rgbaFirstIndex = i * 4;
      return Array.from(pixelData.slice(rgbaFirstIndex, rgbaFirstIndex + RGBA_ARRAY_SIZE));
    });

    setRgba(rgbaData);

    return rgbaData;
  };

  const handleGetImageRgbaDate = () => {
    drawImage();
    const pixelData = getPixelData(canvasRef);
    const rgbaValues = getRgbaValues(pixelData);

    if (rgbaValues) setRgba(rgbaValues);
  };

  image.addEventListener("load", handleGetImageRgbaDate);
  if (thumbnailSource) image.src = thumbnailSource;

  return {
    canvasRef,
    getPixelData,
    getRgbaValues,
  };
};

interface useRgbaProps {
  thumbnailSource: string | null;
  canvasWidth: number;
  canvasHeight: number;
}
