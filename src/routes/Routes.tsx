import { ROUTE_PATH } from "../constants/route";
import { ThumbnailSourceAttach } from "../pages/ThumbnailSourceAttach";
import { ThumbnailResult } from "../pages/ThumbnailResult";
import { ThumbnailOptions } from "../pages/ThumbnailOptions";

export const routes = [
  {
    path: ROUTE_PATH.HOME,
    element: <ThumbnailSourceAttach />,
  },
  {
    path: ROUTE_PATH.THUMBNAIL_RESULT,
    element: <ThumbnailResult />,
  },
  {
    path: ROUTE_PATH.THUMBNAIL_OPTIONS,
    element: <ThumbnailOptions />,
  },
];
