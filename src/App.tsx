import { useState } from "react";
import styled from "styled-components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <S.Title>Vite + React</S.Title>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  );
}

const S = {
  Title: styled.h1`
    color: blue;
  `,
};

export default App;
