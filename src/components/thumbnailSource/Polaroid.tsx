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
    position: absolute;
    top: 0px;
    left: 0px;
    width: 225px;
    height: 300px;
    box-shadow: 1px 1px 1px 1px ${(props) => props.theme.GRAY_800};

    @media (max-width: 600px) {
      width: 150px;
      height: 200px;
    }
  `,
};
