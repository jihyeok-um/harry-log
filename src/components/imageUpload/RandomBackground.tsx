import { animate, motion, useAnimation, useWillChange } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
import gatsby from "../../assets/images/gatsby.webp";
import gleaning from "../../assets/images/gleaning.webp";
import jobs from "../../assets/images/jobs.webp";
import lastMeal from "../../assets/images/lastMeal.webp";
import monaLisa from "../../assets/images/monaLisa.webp";
import pearl from "../../assets/images/pearl.webp";
import scream from "../../assets/images/scream.webp";
import starNight from "../../assets/images/starNight.webp";
import venus from "../../assets/images/venus.webp";
import { Coordinate } from "../../types";

export const RandomBackground = () => {
  const photos = [gatsby, gleaning, jobs, lastMeal, monaLisa, pearl, scream, starNight, venus];
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  let debounce: NodeJS.Timeout | null = null;

  const handleResizeEvent = () => {
    if (debounce) return;

    debounce = setTimeout(() => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    }, 1000);
  };

  window.addEventListener("resize", handleResizeEvent);

  return (
    <S.BackgroundPolaroid>
      {photos.map((photo) => {
        const randomCoord = { x: Math.random() * (width / 1.5), y: Math.random() * (height / 1.5) };
        const randomRotate = Math.random() * 90 - 45;

        return (
          <motion.div
            key={photo}
            drag
            dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1, zIndex: 10 }}
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
            <S.BackgroundPolaroidFrame
              src={photo}
              randomCoord={randomCoord}
              randomRotate={randomRotate}
            />
          </motion.div>
        );
      })}
    </S.BackgroundPolaroid>
  );
};

interface BackgroundPolaroidFrameProps {
  randomCoord: Coordinate;
  randomRotate: number;
}

const S = {
  BackgroundPolaroid: styled.div`
    position: absolute;
    overflow: hidden;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  `,

  BackgroundPolaroidFrame: styled.img<BackgroundPolaroidFrameProps>`
    position: absolute;
    top: ${(props) => props.randomCoord.y}px;
    left: ${(props) => props.randomCoord.x}px;
    width: 225px;
    height: 300px;
    box-shadow: 1px 1px 1px 1px #555555;

    @media (max-width: 600px) {
      width: 150px;
      height: 200px;
    }

    transform: rotate(${(props) => props.randomRotate}deg);
  `,
};
