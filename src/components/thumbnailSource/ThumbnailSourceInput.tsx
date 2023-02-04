import styled from "styled-components";
import addPictureIcon from "../../assets/icons/addDocumentIcon.svg";
import { Styles } from "../../styles/Styles";

export const ThumbnailSourceInput = ({
  thumbnailSourceInputRef,
  handleChangeThumbnailSourceInput,
  handleDragThumbnailSourceInput,
  handleDropThumbnailSourceInput,
}: ImageUploadInputProps) => {
  return (
    <S.InputContainer
      onDragOver={handleDragThumbnailSourceInput}
      onDragLeave={handleDragThumbnailSourceInput}
      onDrop={handleDropThumbnailSourceInput}
    >
      <S.Label htmlFor="imageInput">
        <S.PolaroidContent alt="이미지 추가" src={addPictureIcon} height={300} width={300} />
      </S.Label>
      <S.Input
        id="imageInput"
        type="file"
        accept="image/*"
        ref={thumbnailSourceInputRef}
        onChange={handleChangeThumbnailSourceInput}
      />
    </S.InputContainer>
  );
};

interface ImageUploadInputProps {
  thumbnailSourceInputRef: React.RefObject<HTMLInputElement>;
  handleDropThumbnailSourceInput: (e: React.DragEvent<Element>) => void;
  handleDragThumbnailSourceInput: (e: React.DragEvent<Element>) => void;
  handleChangeThumbnailSourceInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const S = {
  InputContainer: styled.div`
    position: relative;
    width: 279px;
    height: 279px;
    background-color: ${(props) => props.theme.GRAY_500};

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
