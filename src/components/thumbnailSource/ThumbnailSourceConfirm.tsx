import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../assets/icons/cancelIcon.svg";
import camera from "../../assets/icons/camera.svg";
import { Image } from "../@shared/Image";
import { useRgba } from "../../hooks/useRgba";

export const ThumbnailSourceConfirm = ({
  thumbnailSource,
  handleClickCancelButton,
}: ThumbnailSourceConfirmProps) => {
  const [isDimmed, setIsDimmed] = useState(false);
  const { canvasRef } = useRgba({ thumbnailSource, canvasWidth: 600, canvasHeight: 600 });

  return (
    <S.Container>
      <canvas ref={canvasRef} width={600} height={600} style={{ display: "none" }} />
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
    object-fit: cover;
    width: inherit;
    height: inherit;
    border: 1px solid ${(props) => props.theme.GRAY_400};

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
