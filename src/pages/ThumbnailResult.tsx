import { useContext, useEffect } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { DownloadButton } from "../components/DownloadButton";
import { Pointillism } from "../components/Pointillism";
import { ROUTE_PATH } from "../constants/route";
import { RgbaContext } from "../context/RgbaContext";
import { usePointillism } from "../hooks/usePointillism";
import { Styles } from "../styles/Styles";

export const ThumbnailResult = () => {
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const noiseStrength = searchParams.get("noise-strength");
  const rgba = useContext(RgbaContext);
  const navigate = useNavigate();
  const { canvasRef, canvasStatus } = usePointillism({
    thumbnailSource: String(location.state.thumbnailSource),
    noiseStrength: Number(noiseStrength) - 1,
    canvasWidth: 1200,
    canvasHeight: 1200,
  });

  useEffect(() => {
    if (!rgba) {
      alert("이미지 정보가 사라졌습니다. 다시 시도해주세요.");
      navigate(ROUTE_PATH.HOME);
    }
  }, [rgba]);

  return (
    <S.Container>
      <Pointillism canvasRef={canvasRef} />
      <DownloadButton canvasRef={canvasRef} canvasStatus={canvasStatus} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FlexCenter}
    flex-direction: column;
    width: 100%;
    height: 100%;
    gap: 20px;
    background-color: ${(props) => props.theme.BACKGROUND};
  `,
};
