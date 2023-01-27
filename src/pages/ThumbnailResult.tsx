import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Pointillism } from "../components/Pointillism";
import { usePointillism } from "../hooks/usePointillism";

export const ThumbnailResult = () => {
  const location = useLocation();
  const imageUrl = location.state;
  const { canvasRef, thumbnailURL } = usePointillism(imageUrl);

  return (
    <S.Container>
      <Pointillism canvasRef={canvasRef} />
      <S.DownloadButton href={thumbnailURL} download="thumbnail">
        썸네일 다운로드
      </S.DownloadButton>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  DownloadButton: styled.a`
    border: 1px solid #666666;
    border-radius: 2px;
    margin-left: 5px;
    padding: 5px;
    margin-bottom: 20px;
  `,
};
