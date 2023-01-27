import styled from "styled-components";
import { useThumbnail } from "../hooks/useThumbnail";

export const DownloadButton = ({ canvasRef, drawDone }: DownloadButtonProps) => {
  const { thumbnailURL } = useThumbnail(canvasRef, drawDone);

  if (!thumbnailURL) return <h1>로딩중</h1>;

  return (
    <S.DownloadButton href={thumbnailURL} download="thumbnail">
      썸네일 다운로드
    </S.DownloadButton>
  );
};

interface DownloadButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  drawDone: boolean;
}

const S = {
  DownloadButton: styled.a`
    border: 1px solid #666666;
    border-radius: 2px;
    margin-left: 5px;
    padding: 5px;
    margin-bottom: 20px;
  `,
};
