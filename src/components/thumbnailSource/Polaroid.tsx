import styled from "styled-components";

export const Polaroid = ({ ...props }: PolaroidProps) => {
  return <S.Container {...props} />;
};

interface PolaroidProps {
  src: string;
  alt: string;
}

const S = {
  Container: styled.img<PolaroidProps>`
    width: 225px;
    height: 300px;

    @media (max-width: 600px) {
      width: 150px;
      height: 200px;
    }
  `,
};
