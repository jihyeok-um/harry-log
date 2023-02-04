import { useRoutes } from "react-router-dom";
import { routes } from "./routes/Routes";

export const App = () => {
  const content = useRoutes(routes);

  return <>{content}</>;
};
