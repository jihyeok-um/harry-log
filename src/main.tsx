import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { App } from "./App";
import { RgbaContextProvider } from "./context/RgbaContext";
import { GlobalStyle } from "./styles/GlobalStyles";
import { theme } from "./styles/Theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <GlobalStyle />
    <RgbaContextProvider>
      <ThemeProvider theme={theme.light}>
        <App />
      </ThemeProvider>
    </RgbaContextProvider>
  </BrowserRouter>
);
