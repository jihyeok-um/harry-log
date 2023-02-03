import styled from "styled-components";

import { motion } from "framer-motion";
import { ImageUploadForm } from "../components/imageUpload/ImageUploadForm";
import { RandomBackground } from "../components/imageUpload/RandomBackground";
import { Styles } from "../styles/GlobalStyles";

export const ImageUpload = () => {
  return (
    <S.Container>
      <RandomBackground />
      <motion.div
        drag
        dragTransition={{ bounceStiffness: 100, bounceDamping: 10 }}
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
        <ImageUploadForm />
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

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,
};
