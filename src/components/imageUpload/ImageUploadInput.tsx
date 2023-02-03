import styled from "styled-components";
import addPictureIcon from "../../assets/icons/addDocumentIcon.svg";
import { Styles } from "../../styles/GlobalStyles";

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
        <S.PolaroidContent alt="이미지 추가" src={addPictureIcon} height={300} width={300} />
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
    width: 279px;
    height: 279px;
    background-color: #888888;

    @media (max-width: 600px) {
      width: 232px;
      height: 232px;
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
    width: inherit;
    height: inherit;
  `,

  PolaroidContent: styled.img`
    width: 100px;
    height: 100px;
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
