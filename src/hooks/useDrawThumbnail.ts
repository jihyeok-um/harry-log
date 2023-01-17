import { useEffect, useRef, useState } from "react";
import { RGBA_ARRAY_SIZE, THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH, TRIANGLE_COUNT } from "../constants";

const useDrawThumbnail = () => {
  const triangleArray = Array.from({ length: TRIANGLE_COUNT }, () => 0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [rgba, setRgba] = useState<Uint8ClampedArray[] | null>(null);

  useEffect(() => {
    if (canvasRef.current && imageRef.current) {
      const canvas = canvasRef.current.getContext("2d", { willReadFrequently: true });
      canvas?.drawImage(imageRef.current, 0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT);

      if (canvas?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT)) {
        const rgbaArray = [];
        const rgbaData = canvas?.getImageData(0, 0, THUMBNAIL_WIDTH, THUMBNAIL_HEIGHT).data;

        for (let i = 0; i < rgbaData.length; i += RGBA_ARRAY_SIZE) {
          rgbaArray.push(rgbaData.slice(i, i + RGBA_ARRAY_SIZE));
        }
        setRgba(rgbaArray);
      }
    }
  }, [imageRef.current]);

  return {
    triangleArray,
    canvasRef,
    imageRef,
    rgba,
  };
};

export default useDrawThumbnail;
