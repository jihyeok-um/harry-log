import styled from "styled-components";
import addPictureIcon from "../../assets/icons/addDocumentIcon.svg";
import { Styles } from "../../styles/GlobalStyles";
import { Image } from "../@shared/Image";

export const ImageUploadInput = ({
  inputRef,
  handleChangeInput,
  handleDragImage,
  handleDropImageContainer,
}: ImageUploadInputProps) => {
  return (
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
  );
};

interface ImageUploadInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
  handleDropImageContainer: (e: React.DragEvent<Element>) => void;
  handleDragImage: (e: React.DragEvent<Element>) => void;
  handleChangeInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
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
};
