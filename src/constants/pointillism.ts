export const THUMBNAIL_WIDTH = 1600;
export const THUMBNAIL_HEIGHT = 900;
export const RESOLUTION = THUMBNAIL_HEIGHT * THUMBNAIL_WIDTH;

export const NOISE_STRENGTH = [
  {
    TRIANGLE_SIZE: 20, // 가장 약하게
    TRIANGLE_GAP: 8,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 8) * (THUMBNAIL_HEIGHT / 8),
  },
  {
    TRIANGLE_SIZE: 30, // 약하게
    TRIANGLE_GAP: 10,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 10) * (THUMBNAIL_HEIGHT / 10),
  },
  {
    TRIANGLE_SIZE: 40, // 중간
    TRIANGLE_GAP: 12,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 12) * (THUMBNAIL_HEIGHT / 12),
  },
  {
    TRIANGLE_SIZE: 50, // 강하게
    TRIANGLE_GAP: 16,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 16) * (THUMBNAIL_HEIGHT / 16),
  },
  {
    TRIANGLE_SIZE: 60, // 가장 강하게
    TRIANGLE_GAP: 18,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 18) * (THUMBNAIL_HEIGHT / 18),
  },
  {
    TRIANGLE_SIZE: 70, // 가장 강하게
    TRIANGLE_GAP: 20,
    TRIANGLE_COUNT: (THUMBNAIL_WIDTH / 20) * (THUMBNAIL_HEIGHT / 20),
  },
];

export const RGBA_ARRAY_SIZE = 4;
