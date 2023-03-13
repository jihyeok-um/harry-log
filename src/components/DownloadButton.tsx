import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useThumbnailURL } from "../hooks/useThumbnailURL";
import { CanvasStatus } from "../types";
import { Spinner } from "./@shared/Spinner";

export const DownloadButton = ({ canvasRef, canvasStatus }: DownloadButtonProps) => {
  const { thumbnailURL } = useThumbnailURL({ canvasRef, canvasStatus });

  if (!thumbnailURL) return <Spinner />;

  return (
    <S.DownloadButton href={thumbnailURL} download="thumbnail">
      이미지 다운로드
    </S.DownloadButton>
  );
};

interface DownloadButtonProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
  canvasStatus: CanvasStatus;
}

const S = {
  DownloadButton: styled.a`
    height: 44px;
    margin-bottom: 20px;
    padding: 10px;
    background-color: ${(props) => props.theme.GRAY_700};
    border-radius: 10px;
    color: ${(props) => props.theme.WHITE};
    cursor: pointer;
  `,
};
