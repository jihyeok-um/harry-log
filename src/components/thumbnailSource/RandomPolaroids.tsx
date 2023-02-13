import { motion } from "framer-motion";
import styled from "styled-components";
import { randomInt } from "../../utils/randomInt";
import { photos } from "../../constants/photos";
import { Polaroid } from "./Polaroid";
import { Styles } from "../../styles/Styles";

export const RandomPolaroids = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <S.Container>
      {photos.map((photo) => {
        const randomCoord = { x: randomInt(width / 1.5), y: randomInt(height / 1.5) };
        const randomRotate = randomInt(45, -45);

        return (
          <motion.div
            key={photo}
            drag
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            dragConstraints={{
              top: -300,
              left: -300,
              right: 300,
              bottom: 300,
            }}
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
          >
            <Polaroid src={photo} randomCoord={randomCoord} randomRotate={randomRotate} />
          </motion.div>
        );
      })}
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    ${Styles.FullWidthAndHeight}
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
  `,
};
