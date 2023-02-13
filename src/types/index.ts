export interface Coordinate {
  x: number;
  y: number;
}

export interface ThumbnailProps {
  src: string;
}

export interface TriangleInfo {
  firstPoint: Coordinate;
  secondPoint: Coordinate;
  thirdPoint: Coordinate;
  currentPixel: number;
}

export interface DrawTriangleParams {
  rgba: Uint8ClampedArray | undefined;
  triangleInfo: TriangleInfo;
}

export type CanvasStatus = "none" | "loading" | "done";
