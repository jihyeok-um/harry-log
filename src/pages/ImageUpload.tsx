import styled from "styled-components";
import { useImageUploadForm } from "../hooks/useImageUploadForm";

export const ImageUpload = () => {
  const { inputRef, handleSubmitImageUploadForm } = useImageUploadForm();

  return (
    <S.ImageUploadForm onSubmit={handleSubmitImageUploadForm}>
      <S.Input type="file" accept="image/png image/jpeg" ref={inputRef} />
      <S.SubmitButton type="submit">썸네일 생성하기</S.SubmitButton>
    </S.ImageUploadForm>
  );
};

const S = {
  Input: styled.input`
    border: 1px solid #666666;
    border-radius: 2px;
    padding: 2.5px;
  `,

  ImageUploadForm: styled.form``,

  SubmitButton: styled.button`
    border: 1px solid #666666;
    border-radius: 2px;
    margin-left: 5px;
    padding: 5px;
  `,
};
