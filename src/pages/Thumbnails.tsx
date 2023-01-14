import styled from "styled-components";
import gatsby from "../assets/gatsby.png";
import Thumbnail from "../components/@shared/Thumbnail";

const Thumbnails = () => {
  return (
    <S.Container>
      <Thumbnail src={gatsby} />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default Thumbnails;
