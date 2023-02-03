import styled from "styled-components";

import { motion } from "framer-motion";
import polaroidFrame from "../assets/images/polaroidFrame.webp";
import { ImageUploadForm } from "../components/imageUpload/ImageUploadForm";
import { RandomBackground } from "../components/imageUpload/RandomBackground";
import { Styles } from "../styles/GlobalStyles";

export const ImageUpload = () => {
  return (
    <S.Container>
      <RandomBackground />
      <motion.div
        drag
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        dragConstraints={{
          top: -50,
          left: -50,
          right: 50,
          bottom: 50,
        }}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      >
        <S.PolaroidContainer>
          <S.PolaroidFrame src={polaroidFrame} />
          <ImageUploadForm />
        </S.PolaroidContainer>
      </motion.div>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    flex-direction: column;
    ${Styles.FlexCenter}
    ${Styles.FullWidthAndHeight}
    background-color: whitesmoke;
  `,

  PolaroidContainer: styled.div`
    position: relative;
    flex-direction: column;
    ${Styles.FlexCenter}
    width: fit-content;
    height: fit-content;
    gap: 20px;
  `,

  PolaroidFrame: styled.img`
    width: 300px;
    height: 400px;
    box-shadow: 3px 3px 3px 3px black;

    @media (max-width: 600px) {
      width: 250px;
      height: 332px;
    }
  `,

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,

  Picture: styled.img`
    scale: 0.2;
  `,
};
