import styled from "styled-components";
import addPictureIcon from "../../asset/addDocumentIcon.svg";
import { Styles } from "../../styles/GlobalStyles";
import { Image } from "../@shared/Image";
import { ImageConfirm } from "./ImageConfirm";

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
        <S.InputContainer
          onDragOver={handleDragImage}
          onDragLeave={handleDragImage}
          onDrop={handleDropImageContainer}
        >
          <S.Label htmlFor="imageInput">
            <Image alt="이미지 추가" src={addPictureIcon} height={100} width={100} />
          </S.Label>
          <S.Input
            id="imageInput"
            type="file"
            accept="image/*"
            ref={inputRef}
            onChange={handleChangeInput}
          />
        </S.InputContainer>
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

  InputContainer: styled.div`
    position: relative;
    width: 480px;
    height: 270px;
    border-radius: 10px;
    background-color: #888888;

    @media (max-width: 500px) {
      width: 350px;
      height: 250px;
    }

    :hover {
      filter: brightness(0.8);
    }
    :active {
      filter: brightness(0.7);
    }
  `,

  Label: styled.label`
    ${Styles.FlexCenter}
    ${Styles.FullWidthAndHeight}
  `,

  Input: styled.input`
    position: absolute;
    overflow: hidden;
    visibility: hidden;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    margin: 0;
    border: 0;
    padding: 0;
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
