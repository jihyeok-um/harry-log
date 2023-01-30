import styled from "styled-components";
import { ImageUploadForm } from "../components/imageUpload/ImageUploadForm";
import { useImageUploadForm } from "../hooks/useImageUploadForm";

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
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  Title: styled.h1`
    font-size: 20px;
    font-weight: 700;
  `,
};
