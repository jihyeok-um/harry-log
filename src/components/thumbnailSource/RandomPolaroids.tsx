import { motion } from "framer-motion";
import styled from "styled-components";
import { Coordinate } from "../../types";
import { randomInt } from "../../utils/randomInt";
import { photos } from "../../constants/photos";
import { debounce } from "../../utils/debounce";
import { Polaroid } from "./Polaroid";

export const RandomPolaroids = () => {
  const width = window.innerWidth;
  const height = window.innerHeight;

  const handleResizeWindow = () => {
    window.location.reload();
  };

  window.addEventListener("resize", () => debounce({ callback: handleResizeWindow, delay: 500 }));

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
              top: -150,
              left: -150,
              right: 150,
              bottom: 150,
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
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,
};
