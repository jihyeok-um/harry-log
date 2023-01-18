import { ROUTE_PATH } from "../constants";
import { ImageUpload } from "../pages/ImageUpload";
import { ThumbnailResult } from "../pages/ThumbnailResult";

const routes = [
  {
    path: ROUTE_PATH.HOME,
    element: <ImageUpload />,
  },
  {
    path: ROUTE_PATH.THUMBNAIL_RESULT,
    element: <ThumbnailResult />,
  },
];

export default routes;
