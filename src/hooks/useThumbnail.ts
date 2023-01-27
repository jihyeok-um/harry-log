import { useEffect, useState } from "react";
export const useThumbnail = (canvasRef: React.RefObject<HTMLCanvasElement>, drawDone: boolean) => {
  const [thumbnailURL, setThumbnailURL] = useState<string | undefined>();

  useEffect(() => {
    if (!canvasRef.current) return;

    setThumbnailURL(canvasRef.current.toDataURL());
  }, [drawDone]);

  return {
    thumbnailURL,
  };
};
