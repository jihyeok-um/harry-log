import styled from "styled-components";
import { useImageUploadForm } from "../../hooks/useImageUploadForm";
import { Styles } from "../../styles/GlobalStyles";
import { ImageConfirm } from "./ImageConfirm";
import { ImageUploadInput } from "./ImageUploadInput";

export const ImageUploadForm = () => {
  const {
    inputRef,
    thumbnailSource,
    handleDropImageContainer,
    handleDragImage,
    handleChangeInput,
    handleClickCancelButton,
  } = useImageUploadForm();

  return (
    <S.Form>
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
  );
};

const S = {
  Form: styled.form`
    position: absolute;
    top: 0px;
    ${Styles.FlexCenter}
    flex-direction: column;
    gap: 20px;
  `,
};
