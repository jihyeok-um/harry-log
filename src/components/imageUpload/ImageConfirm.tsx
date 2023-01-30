import React, { useState } from "react";
import styled, { css } from "styled-components";
import cancelIcon from "../../asset/cancelIcon.svg";
import { animation } from "../../styles/animation";
import { Image } from "../@shared/Image";

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
        <Image src={cancelIcon} alt="이미지 삭제 아이콘" width={44} height={44} />
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

  Button: styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
  `,
};
