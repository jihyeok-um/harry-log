import styled from "styled-components";
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
      <S.FormContainer>
        {!thumbnailSource && <S.Title>썸네일로 만들 이미지를 골라주세요!</S.Title>}
        {thumbnailSource && <S.Title>이 이미지가 맞나요?</S.Title>}
        <ImageUploadForm
          inputRef={inputRef}
          thumbnailSource={thumbnailSource}
          handleChangeInput={handleChangeInput}
          handleClickCancelButton={handleClickCancelButton}
          handleDragImage={handleDragImage}
          handleDropImageContainer={handleDropImageContainer}
          handleSubmitImageUploadForm={handleSubmitImageUploadForm}
        />
      </S.FormContainer>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    flex-direction: column;
    ${Styles.FlexCenter}
    ${Styles.FullWidthAndHeight}
  `,

  FormContainer: styled.div`
    flex-direction: column;
    ${Styles.FlexCenter}
    gap: 20px;
  `,

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,

  Picture: styled.img`
    scale: 0.2;
  `,
};
