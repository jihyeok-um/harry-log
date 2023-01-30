import { useState } from "react";
import styled, { css } from "styled-components";
import addPictureIcon from "../asset/addDocumentIcon.svg";
import cancelIcon from "../asset/cancelIcon.svg";
import { Image } from "../components/@shared/Image";
import { useImageUploadForm } from "../hooks/useImageUploadForm";
import { animation } from "../styles/animation";

export const ImageUpload = () => {
  const {
    inputRef,
    thumbnailSource,
    handleSubmitImageUploadForm,
    handleDropImageDiv,
    handleDragImage,
    handleChangeInput,
    handleClickCancelButton,
  } = useImageUploadForm();
  const [isImageDimmed, setIsImageDimmed] = useState(false);

  return (
    <S.Container>
      {!thumbnailSource && <S.Title>썸네일로 만들 이미지를 골라주세요!</S.Title>}
      {thumbnailSource && <S.Title>이 이미지가 맞나요?</S.Title>}
      <S.ImageUploadForm onSubmit={handleSubmitImageUploadForm}>
        {!thumbnailSource && (
          <S.InputDiv
            onDragOver={handleDragImage}
            onDragLeave={handleDragImage}
            onDrop={handleDropImageDiv}
          >
            <S.Label htmlFor="imageInput">
              <Image alt="이미지 추가" src={addPictureIcon} height={100} width={100} />
            </S.Label>
            <S.Input
              id="imageInput"
              type="file"
              accept="image/png image/jpeg"
              ref={inputRef}
              onChange={handleChangeInput}
            />
          </S.InputDiv>
        )}
        {thumbnailSource && (
          <S.ThumbnailSourceContainer>
            <S.ThumbnailSource
              src={thumbnailSource}
              isImageDimmer={isImageDimmed}
              alt="썸네일 소스 이미지"
            />
            <S.Button
              onClick={(e) => {
                handleClickCancelButton(e);
                setIsImageDimmed(false);
              }}
              onMouseEnter={() => setIsImageDimmed(true)}
              onMouseOut={() => setIsImageDimmed(false)}
            >
              <Image src={cancelIcon} alt="이미지 삭제 버튼" width={44} height={44} />
            </S.Button>
          </S.ThumbnailSourceContainer>
        )}
        <S.SubmitButton>썸네일 만들기</S.SubmitButton>
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
    width: 480px;
    height: 270px;
    border-radius: 10px;
    background-color: #888888;

    :hover {
      background-color: #777777;
    }

    :active {
      background-color: #666666;
    }

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

  Button: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
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

  ThumbnailSourceContainer: styled.div`
    position: relative;
    width: 480px;
    height: 270px;

    animation-name: closeUp;
    animation-duration: 0.3s;

    ${animation.closeUp}
  `,

  ThumbnailSource: styled.img<{ isImageDimmer: boolean }>`
    width: inherit;
    height: inherit;
    border-radius: 10px;

    ${(props) =>
      props.isImageDimmer
        ? css`
            filter: brightness(0.7);
          `
        : css``}
  `,

  ButtonContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
  `,
};
