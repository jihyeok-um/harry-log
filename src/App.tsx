import { useRoutes } from "react-router-dom";
import { ROUTE_PATH } from "./constants/route";
import { routes } from "./routes/Routes";
import { debounce } from "./utils/debounce";

export const App = () => {
  const content = useRoutes(routes);

  const handleResizeWindow = () => {
    if (location.pathname === ROUTE_PATH.HOME) {
      window.location.reload();
    }
  };

  window.addEventListener("resize", () => debounce({ callback: handleResizeWindow, delay: 500 }));

  return <>{content}</>;
};
