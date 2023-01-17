import styled from "styled-components";
import jobs from "../assets/Steve-Jobs.jpeg";
import Thumbnail from "../components/@shared/Thumbnail";
// import gatsby from "../assets/gatsby.png";
// import test from '../assets/test.jpg';

const Thumbnails = () => {
  return (
    <S.Container>
      <Thumbnail src={jobs} />
      {/* <Thumbnail src={gatsby} /> */}
      {/* <Thumbnail src={test} /> */}
    </S.Container>
  );
};

const S = {
  Container: styled.div``,
};

export default Thumbnails;
