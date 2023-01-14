import styled from "styled-components";
import gatsby from "../assets/gatsby.png";
import Thumbnail from "../components/@shared/Thumbnail";
import ThumbnailPoint from "../components/@shared/ThumbnailPoint";

const Thumbnails = () => {
  return (
    <S.Container>
      <Thumbnail src={gatsby} />
      <ThumbnailPoint />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default Thumbnails;
