import styled from "styled-components";
import jobs from "../assets/Steve-Jobs.jpeg";

import Thumbnail from "../components/@shared/Thumbnail";

const Thumbnails = () => {
  return (
    <S.Container>
      <Thumbnail src={jobs} />
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default Thumbnails;
