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
  rgbaPixel: number;
}

export interface DrawTriangleParams {
  rgba: number[][] | undefined;
  triangleInfo: TriangleInfo;
}
