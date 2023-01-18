import { useRoutes } from "react-router-dom";
import styled from "styled-components";
import routes from "./routes/Routes";

const App = () => {
  const content = useRoutes(routes);

  return <S.App>{content}</S.App>;
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
