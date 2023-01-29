import styled from "styled-components";
import AddPicture from "../asset/add-document.svg";
import { Image } from "../components/@shared/Image";
import { useImageUploadForm } from "../hooks/useImageUploadForm";

export const ImageUpload = () => {
  const {
    inputRef,
    handleSubmitImageUploadForm,
    handleDropImageDiv,
    handleDragImage,
    handleChangeInput,
  } = useImageUploadForm();

  return (
    <S.Container>
      <S.Title>썸네일로 만들 이미지를 골라주세요!</S.Title>
      <S.ImageUploadForm onSubmit={handleSubmitImageUploadForm}>
        <S.InputDiv
          onDragOver={handleDragImage}
          onDragLeave={handleDragImage}
          onDrop={handleDropImageDiv}
        >
          <S.Label htmlFor="imageInput">
            <Image alt="이미지 추가" src={AddPicture} height={200} width={200} />
          </S.Label>
          <S.Input
            id="imageInput"
            type="file"
            accept="image/png image/jpeg"
            ref={inputRef}
            onChange={handleChangeInput}
          />
        </S.InputDiv>
      </S.ImageUploadForm>
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

  ImageUploadForm: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  InputDiv: styled.div`
    position: relative;
    width: 500px;
    height: 300px;
    background-color: #888888;
    border-radius: 10px;

    @media (max-width: 500px) {
      width: 350px;
      height: 250px;
    }
  `,

  Label: styled.label`
    display: flex;
    justify-content: center;
    align-items: center;
    width: inherit;
    height: inherit;
  `,

  Input: styled.input`
    position: absolute;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    visibility: hidden;
    border: 0;
  `,
};
