import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../assets/icons/cancelIcon.svg";

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
        <S.CancelImage src={cancelIcon} alt="이미지 삭제 아이콘" width={100} height={100} />
      </S.Button>
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
    margin-top: 10px;
    width: 279px;
    height: 279px;

    @media (max-width: 600px) {
      margin-top: 8px;
      width: 232px;
      height: 232px;
    }
  `,

  ThumbnailSource: styled.img<{ isImageDimmer: boolean }>`
    width: inherit;
    height: inherit;

    ${(props) =>
      props.isImageDimmer
        ? css`
            filter: brightness(0.7);
          `
        : css``}
  `,

  Button: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 44px;
    height: 44px;
  `,

  CancelImage: styled.img`
    width: 44px;
    height: 44px;
  `,
};
