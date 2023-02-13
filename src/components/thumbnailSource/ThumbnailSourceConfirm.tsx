import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../assets/icons/cancelIcon.svg";
import camera from "../../assets/icons/camera.svg";
import logo from "../../assets/images/logo.png";
import { Picture } from "../@shared/Picture";
import { useRgba } from "../../hooks/useRgba";

export const ThumbnailSourceConfirm = ({
  thumbnailSource,
  handleClickCancelButton,
}: ThumbnailSourceConfirmProps) => {
  const [isDimmed, setIsDimmed] = useState(false);
  const { canvasRef } = useRgba({
    thumbnailSource,
    canvasWidth: 1200,
    canvasHeight: 1200,
  });

  return (
    <S.Container>
      <canvas ref={canvasRef} width={1200} height={1200} style={{ display: "none" }} />
      {thumbnailSource && <S.ThumbnailSource src={thumbnailSource} isImageDimmer={isDimmed} />}
      <S.CancelButton
        onMouseEnter={() => setIsDimmed(true)}
        onMouseLeave={() => setIsDimmed(false)}
        onClick={(e: React.MouseEvent) => {
          handleClickCancelButton(e);
          setIsDimmed(false);
        }}
      >
        <Picture src={cancelIcon} alt="이미지 삭제 아이콘" width={44} height={44} />
      </S.CancelButton>
      <S.SubmitButton>
        <Picture src={logo} alt="이미지 제출 아이콘" width={90} height={90} />
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
    background-color: ${(props) => props.theme.GRAY_500};

    @media (max-width: 600px) {
      width: 232px;
      height: 232px;
    }
  `,

  ThumbnailSource: styled.img<{ isImageDimmer: boolean }>`
    object-fit: cover;
    width: 278px;
    height: 278px;
    border: 1px solid ${(props) => props.theme.GRAY_400};

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
    margin-left: 117px;
    margin-top: 25px;

    @media (max-width: 600px) {
      margin-left: 94px;
      margin-top: 20px;
    }
  `,
};
