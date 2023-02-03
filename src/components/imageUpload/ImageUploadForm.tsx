import styled, { css } from "styled-components";
import { useImageUploadForm } from "../../hooks/useImageUploadForm";
import { Styles } from "../../styles/GlobalStyles";
import { ImageConfirm } from "./ImageConfirm";
import { ImageUploadInput } from "./ImageUploadInput";

export const ImageUploadForm = () => {
  const {
    inputRef,
    thumbnailSource,
    thumbnailSize,
    handleDropImageContainer,
    handleDragImage,
    handleChangeInput,
    handleClickCancelButton,
    handleSubmitImageUploadForm,
  } = useImageUploadForm();

  return (
    <S.PolaroidContainer thumbnailSize={thumbnailSize}>
      <S.Form onSubmit={handleSubmitImageUploadForm}>
        {!thumbnailSource && (
          <ImageUploadInput
            inputRef={inputRef}
            handleChangeInput={handleChangeInput}
            handleDragImage={handleDragImage}
            handleDropImageContainer={handleDropImageContainer}
          />
        )}
        {thumbnailSource && (
          <ImageConfirm
            thumbnailSource={thumbnailSource}
            handleClickCancelButton={handleClickCancelButton}
          />
        )}
      </S.Form>
    </S.PolaroidContainer>
  );
};

const S = {
  PolaroidContainer: styled.div<{ thumbnailSize: number }>`
    position: relative;
    flex-direction: column;
    ${Styles.FlexCenter}
    width: fit-content;
    height: fit-content;
    border: 10px solid #fff;
    border-bottom: 100px solid #fff;
    box-shadow: 3px 3px 3px 3px black;
  `,

  Form: styled.form`
    ${Styles.FlexCenter}
    flex-direction: column;
  `,
};
