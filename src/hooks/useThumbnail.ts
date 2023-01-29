import { useEffect, useState } from "react";
import { CanvasStatus } from "./../types/index";
export const useThumbnail = ({ canvasRef, canvasStatus }: useThumbnailParams) => {
  const [thumbnailURL, setThumbnailURL] = useState<string | undefined>();

  useEffect(() => {
    if (!canvasRef.current || canvasStatus !== "done") return;

    setThumbnailURL(canvasRef.current.toDataURL());
  }, [canvasStatus]);

  return {
    thumbnailURL,
  };
};

interface useThumbnailParams {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasStatus: CanvasStatus;
}
