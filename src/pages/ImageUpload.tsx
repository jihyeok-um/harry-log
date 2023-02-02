import styled from "styled-components";
import polaroid from "../assets/images/polaroidFrame.png";
import { ImageUploadForm } from "../components/imageUpload/ImageUploadForm";
import { useImageUploadForm } from "../hooks/useImageUploadForm";
import { Styles } from "../styles/GlobalStyles";

export const ImageUpload = () => {
  const {
    inputRef,
    thumbnailSource,
    handleSubmitImageUploadForm,
    handleDropImageContainer,
    handleDragImage,
    handleChangeInput,
    handleClickCancelButton,
  } = useImageUploadForm();

  return (
    <S.Container>
      <S.PolaroidContainer>
        <S.Polaroid src={polaroid} />
        <ImageUploadForm
          inputRef={inputRef}
          thumbnailSource={thumbnailSource}
          handleChangeInput={handleChangeInput}
          handleClickCancelButton={handleClickCancelButton}
          handleDragImage={handleDragImage}
          handleDropImageContainer={handleDropImageContainer}
          handleSubmitImageUploadForm={handleSubmitImageUploadForm}
        />
      </S.PolaroidContainer>
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

  Polaroid: styled.img`
    width: 900px;
    height: 1200px;
    box-shadow: 15px 15px 15px 15px #555555;
  `,

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,

  Picture: styled.img`
    scale: 0.2;
  `,
};
