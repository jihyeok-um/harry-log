import styled from "styled-components";
import { useImageUploadForm } from "../hooks/useImageUploadForm";

export const ImageUpload = () => {
  const { inputRef, handleSubmitImageUploadForm, handleDropImageDiv, handleChangeInput } =
    useImageUploadForm();

  return (
    <S.ImageUploadForm onSubmit={handleSubmitImageUploadForm}>
      <S.InputDiv onDrop={handleDropImageDiv}>
        <S.Input
          type="file"
          accept="image/png image/jpeg"
          ref={inputRef}
          onChange={handleChangeInput}
        />
      </S.InputDiv>
      <S.SubmitButton type="submit">썸네일 생성하기</S.SubmitButton>{" "}
    </S.ImageUploadForm>
  );
};

const S = {
  ImageUploadForm: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,

  InputDiv: styled.div`
    width: 500px;
    height: 300px;
    background-color: #666666;
  `,

  Container: styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `,

  Input: styled.input`
    width: inherit;
    height: inherit;
  `,

  SubmitButton: styled.button`
    width: max-content;
    border: 1px solid #666666;
    border-radius: 2px;
    margin-left: 5px;
    padding: 5px;
  `,
};
