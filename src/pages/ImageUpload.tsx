import styled, { css } from "styled-components";
import { ImageUploadForm } from "../components/imageUpload/ImageUploadForm";
import { useImageUploadForm } from "../hooks/useImageUploadForm";
import { animation } from "../styles/animation";

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

  Button: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
  `,

  ThumbnailSourceContainer: styled.div`
    position: relative;
    width: 480px;
    height: 270px;

    animation-name: closeUp;
    animation-duration: 0.3s;

    ${animation.closeUp}
  `,

  ThumbnailSource: styled.img<{ isImageDimmer: boolean }>`
    width: inherit;
    height: inherit;
    border-radius: 10px;

    ${(props) =>
      props.isImageDimmer
        ? css`
            filter: brightness(0.7);
          `
        : css``}
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
};
