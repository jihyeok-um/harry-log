import styled from "styled-components";
import SearchImage from "./pages/SearchImage";
import Thumbnails from "./pages/Thumbnails";

const App = () => {
  return (
    <S.App>
      <SearchImage />
      <Thumbnails />
    </S.App>
  );
};

const S = {
  App: styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 20px;

    height: 100%;
  `,
};

export default App;
