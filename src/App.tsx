import styled from "styled-components";
import Thumbnails from "./pages/Thumbnails";

const App = () => {
  return (
    <S.App>
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
