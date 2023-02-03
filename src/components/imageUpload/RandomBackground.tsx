import styled from "styled-components";
import gatsby from "../../assets/images/gatsby.png";
import gleaning from "../../assets/images/gleaning.png";
import jobs from "../../assets/images/jobs.png";
import lastMeal from "../../assets/images/lastMeal.png";
import monaLisa from "../../assets/images/monaLisa.png";
import pearl from "../../assets/images/pearl.png";
import scream from "../../assets/images/scream.png";
import starNight from "../../assets/images/starNight.png";
import venus from "../../assets/images/venus.png";
import { Coordinate } from "../../types";

export const RandomBackground = () => {
  const photos = [gatsby, gleaning, jobs, lastMeal, monaLisa, pearl, scream, starNight, venus];
  const width = window.innerWidth;
  const height = window.innerHeight;

  return (
    <S.BackgroundPolaroid>
      {photos.map((photo) => {
        const randomCoord = { x: Math.random() * (width / 1.5), y: Math.random() * (height / 1.5) };
        const randomRotate = Math.random() * 90 - 45;

        console.log(randomCoord);

        return (
          <S.BackgroundPolaroidFrame
            key={photo}
            src={photo}
            randomCoord={randomCoord}
            randomRotate={randomRotate}
          />
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
