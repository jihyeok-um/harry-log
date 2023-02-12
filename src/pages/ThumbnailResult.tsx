import { useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DownloadButton } from "../components/DownloadButton";
import { Pointillism } from "../components/Pointillism";
import { THUMBNAIL_HEIGHT, THUMBNAIL_WIDTH } from "../constants/pointillism";
import { usePointillism } from "../hooks/usePointillism";
import { useRgba } from "../hooks/useRgba";
import { Styles } from "../styles/Styles";

export const ThumbnailResult = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const noiseStrength = searchParams.get("noise-strength");
  const { canvasRef: rgbaRef } = useRgba({
    thumbnailSource: location.state.thumbnailSource,
    canvasWidth: THUMBNAIL_WIDTH,
    canvasHeight: THUMBNAIL_HEIGHT,
  });
  const { canvasRef, canvasStatus } = usePointillism({
    thumbnailSource: location.state.thumbnailSource,
    noiseStrength: Number(noiseStrength) - 1,
    canvasWidth: THUMBNAIL_WIDTH,
    canvasHeight: THUMBNAIL_HEIGHT,
  });

  return (
    <S.Container>
      <canvas
        ref={rgbaRef}
        width={THUMBNAIL_WIDTH}
        height={THUMBNAIL_HEIGHT}
        style={{ display: "none" }}
      />
      <Pointillism canvasRef={canvasRef} />
      <DownloadButton canvasRef={canvasRef} canvasStatus={canvasStatus} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    flex-direction: column;
    gap: 20px;
  `,
};
