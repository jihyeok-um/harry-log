import { useEffect, useRef, useState } from "react";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH, TRIANGLE_COUNT } from "../constants/triangle";
import { RGBA_ARRAY_SIZE } from "./../constants/triangle";

export const useGetImageRgba = (src: string) => {
  const componentArray = Array.from({ length: TRIANGLE_COUNT }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rgba, setRgba] = useState<number[][] | null>(null);
  const image = new Image();
  image.src = src;

  const createImageData = () => {
    if (!canvasRef.current || !image) return;

    const ctx = canvasRef.current.getContext("2d", { willReadFrequently: true });
    ctx?.drawImage(image, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

    return ctx?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;
  };

  const createRgbaArray = (imageData: Uint8ClampedArray | undefined) => {
    if (!imageData) return;

    const rgbaArray = [];
    for (let i = 0; i < imageData.length; i += RGBA_ARRAY_SIZE) {
      rgbaArray.push(Array.from(imageData.slice(i, i + RGBA_ARRAY_SIZE)));
    }
    setRgba(rgbaArray);
  };

  useEffect(() => {
    createRgbaArray(createImageData());
  }, [canvasRef.current]);

  return {
    componentArray,
    canvasRef,
    rgba,
  };
};
