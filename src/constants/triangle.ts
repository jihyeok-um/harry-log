export const THUMBNAIL_WIDTH = 1600;
export const THUMBNAIL_HEIGHT = 900;
export const RESOLUTION = THUMBNAIL_HEIGHT * THUMBNAIL_WIDTH;

export const TRIANGLE_SIZE = 30;
export const TRIANGLE_GAP = 10;

export const TRIANGLE_COUNT = (THUMBNAIL_WIDTH / TRIANGLE_GAP) * (THUMBNAIL_HEIGHT / TRIANGLE_GAP);

export const RGBA_ARRAY_SIZE = 4;

//            size | gap
// 가장 거칠게    60    20
// 거칠게        50    16
// 중간         40    12
// 부드럽게      30    10
// 가장 부드럽게  20     8
