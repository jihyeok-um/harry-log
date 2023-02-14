import styled from "styled-components";
import { useThumbnailURL } from "../hooks/useThumbnailURL";
import { CanvasStatus } from "../types";

export const DownloadButton = ({ canvasRef, canvasStatus }: DownloadButtonProps) => {
  const { thumbnailURL } = useThumbnailURL({ canvasRef, canvasStatus });

  if (!thumbnailURL) return <S.Spinner />;

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
  Spinner: styled.div`
    box-sizing: border-box;
    width: 44px;
    height: 44px;
    margin-bottom: 20px;
    border: 8px solid ${(props) => props.theme.GRAY_500};
    border-top: 8px solid ${(props) => props.theme.GRAY_300};
    border-radius: 50px;

    animation: spinner 1.5s linear infinite;
    @keyframes spinner {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  `,

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
