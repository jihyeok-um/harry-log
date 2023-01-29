import styled from "styled-components";
import { useThumbnail } from "../hooks/useThumbnail";
import { CanvasStatus } from "../types";

export const DownloadButton = ({ canvasRef, canvasStatus }: DownloadButtonProps) => {
  const { thumbnailURL } = useThumbnail({ canvasRef, canvasStatus });

  if (!thumbnailURL) return <h1>로딩중</h1>;

  return (
    <S.DownloadButton href={thumbnailURL} download="thumbnail">
      썸네일 다운로드
    </S.DownloadButton>
  );
};

interface DownloadButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasStatus: CanvasStatus;
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
