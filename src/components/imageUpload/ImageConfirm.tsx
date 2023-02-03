import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../assets/icons/cancelIcon.svg";
import camera from "../../assets/icons/camera.svg";

export const ImageConfirm = ({ thumbnailSource, handleClickCancelButton }: ImageConfirmProps) => {
  const [isImageDimmed, setIsImageDimmed] = useState(false);

  return (
    <S.Container>
      <S.ThumbnailSource src={thumbnailSource!} isImageDimmer={isImageDimmed} />
      <S.Button
        onMouseEnter={() => setIsImageDimmed(true)}
        onMouseLeave={() => setIsImageDimmed(false)}
        onClick={(e: React.MouseEvent) => {
          handleClickCancelButton(e);
          setIsImageDimmed(false);
        }}
      >
        <S.ButtonImage src={cancelIcon} alt="이미지 삭제 아이콘" />
      </S.Button>
      <S.SubmitButton>
        <img src={camera} alt="이미지 편집 아이콘" width={60} height={60} />
      </S.SubmitButton>
    </S.Container>
  );
};

interface ImageConfirmProps {
  thumbnailSource: string | null;
  handleClickCancelButton: (e: React.MouseEvent<Element, MouseEvent>) => void;
}

const S = {
  Container: styled.div`
    position: relative;
    width: 279px;
    height: 279px;

    @media (max-width: 600px) {
      width: 232px;
      height: 232px;
    }
  `,

  ThumbnailSource: styled.img<{ isImageDimmer: boolean }>`
    width: 279px;
    height: 279px;
    background-color: #888888;
    object-fit: cover;

    @media (max-width: 600px) {
      width: 232px;
      height: 232px;
    }

    ${(props) =>
      props.isImageDimmer
        ? css`
            filter: brightness(0.7);
          `
        : css``};
  `,

  Button: styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    width: 44px;
    height: 44px;
  `,

  ButtonImage: styled.img`
    width: 44px;
    height: 44px;
  `,

  SubmitButton: styled.button`
    width: 44px;
    height: 44px;
    margin-left: 110px;
    margin-top: 15px;

    @media (max-width: 600px) {
      margin-left: 90px;
      margin-top: 13px;
    }
  `,
};
