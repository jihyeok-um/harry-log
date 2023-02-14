import styled from "styled-components";

export const Pointillism = ({ canvasRef }: PointillismProps) => {
  return (
    <S.Container>
      <S.Canvas ref={canvasRef} width={1200} height={1200}></S.Canvas>
    </S.Container>
  );
};

interface PointillismProps {
  canvasRef: React.RefObject<HTMLCanvasElement>;
}

const S = {
  Container: styled.div`
    position: relative;
    box-shadow: 2px 2px 2px 2px ${(props) => props.theme.GRAY_600};

    @media (min-width: 1600px) {
      width: 900px;
      height: 900px;
    }

    @media (max-width: 1600px) {
      width: 600px;
      height: 600px;
    }

    @media (max-width: 600px) {
      width: 95vw;
      height: 95vw;
    }
  `,

  Canvas: styled.canvas`
    width: inherit;
    height: inherit;
  `,
};
