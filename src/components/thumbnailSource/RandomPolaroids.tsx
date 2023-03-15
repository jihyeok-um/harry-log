import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { randomInt } from "../../utils/randomInt";
import { photos } from "../../constants/photos";
import { Polaroid } from "./Polaroid";
import { Styles } from "../../styles/Styles";
import { useRef } from "react";
import { Coordinate } from "../../types";

export const RandomPolaroids = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <S.Container ref={boxRef}>
      {photos.map((photo) => {
        const randomCoord = { x: randomInt(width), y: randomInt(height) };
        const randomRotate = randomInt(45, -45);

        return (
          <S.Polaroid
            key={photo}
            randomCoord={randomCoord}
            initial={{ scale: 0.8, rotateZ: randomRotate }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            drag
            dragTransition={{ bounceStiffness: 100, bounceDamping: 50 }}
            dragConstraints={boxRef}
          >
            <Polaroid src={photo} alt="베경 폴라로이드" />
          </S.Polaroid>
        );
      })}
    </S.Container>
  );
};

const S = {
  Container: styled(motion.div)`
    ${Styles.FullWidthAndHeight}
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  `,

  Polaroid: styled(motion.div)<{ randomCoord: Coordinate }>`
    position: absolute;
    width: 225px;
    height: 300px;
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.GRAY_800};

    @media (max-width: 600px) {
      width: 150px;
      height: 200px;
    }

    ${(props) =>
      props.randomCoord
        ? css`
            position: absolute;
            top: ${props.randomCoord.y}px;
            left: ${props.randomCoord.x}px;
          `
        : css``}
  `,
};
