import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../assets/icons/cancelIcon.svg";
import camera from "../../assets/icons/camera.svg";
import { Image } from "../@shared/Image";

export const ThumbnailSourceConfirm = ({
  thumbnailSource,
  handleClickCancelButton,
}: ThumbnailSourceConfirmProps) => {
  const [isDimmed, setIsDimmed] = useState(false);

  return (
    <S.Container>
      <S.ThumbnailSource src={thumbnailSource!} isImageDimmer={isDimmed} />
      <S.CancelButton
        onMouseEnter={() => setIsDimmed(true)}
        onMouseLeave={() => setIsDimmed(false)}
        onClick={(e: React.MouseEvent) => {
          handleClickCancelButton(e);
          setIsDimmed(false);
        }}
      >
        <Image src={cancelIcon} alt="이미지 삭제 아이콘" width={44} height={44} />
      </S.CancelButton>
      <S.SubmitButton>
        <Image src={camera} alt="이미지 제출 아이콘" width={60} height={60} />
      </S.SubmitButton>
    </S.Container>
  );
};

interface ThumbnailSourceConfirmProps {
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
    object-fit: cover;
    background-color: #888888;

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

  CancelButton: styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
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
