import styled from "styled-components";
import { Styles } from "../../styles/GlobalStyles";
import { ImageConfirm } from "./ImageConfirm";
import { ImageUploadInput } from "./ImageUploadInput";

export const ImageUploadForm = ({
  inputRef,
  thumbnailSource,
  handleSubmitImageUploadForm,
  handleDropImageContainer,
  handleDragImage,
  handleChangeInput,
  handleClickCancelButton,
}: ImageUploadFormProps) => {
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
      <S.SubmitButton>다음</S.SubmitButton>
    </S.Form>
  );
};

interface ImageUploadFormProps {
  inputRef: React.RefObject<HTMLInputElement>;
  thumbnailSource: string | null;
  handleSubmitImageUploadForm: (e: React.FormEvent<HTMLFormElement>) => void;
  handleDropImageContainer: (e: React.DragEvent<Element>) => void;
  handleDragImage: (e: React.DragEvent<Element>) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleClickCancelButton: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const S = {
  Form: styled.form`
    ${Styles.FlexCenter}
    flex-direction: column;
    ${Styles.FullWidthAndHeight}
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
