import styled from "styled-components";
import { useImageUploadForm } from "../../hooks/useImageUploadForm";
import { Styles } from "../../styles/GlobalStyles";
import { ImageConfirm } from "./ImageConfirm";
import { ImageUploadInput } from "./ImageUploadInput";

export const ImageUploadForm = () => {
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

  SubmitButton: styled.button`
    text-align: center;
    width: 100px;
    height: 44px;
    padding: 10px;
    border-radius: 15px;
    background-color: #007afe;
    color: white;
    font-size: 18px;
  `,
};
