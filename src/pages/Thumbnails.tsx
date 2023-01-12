import styled from "styled-components";
import gatsby from "../assets/gatsby.png";

const Thumbnails = () => {
  return (
    <S.Container>
      <img src={gatsby} />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default Thumbnails;
