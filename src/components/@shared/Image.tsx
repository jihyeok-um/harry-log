import { HTMLAttributes } from "react";
import styled from "styled-components";

export const Image = ({ ...props }: ImageProps) => {
  return <S.Image {...props} />;
};

interface ImageProps extends HTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const S = {
  Image: styled.img<{ width: number; height: number }>`
    width: ${(props) => props.width}px;
    height: ${(props) => props.height}px;
  `,
};
