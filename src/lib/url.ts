import { Point, Rect } from "@/slices/DataService";

const params = new URLSearchParams(location.search);

export function getPointFromQuery(name: string, fallback: Point) {
  const raw = params.get(name);

  if (!raw) {
    return fallback;
  }

  const coords = raw.split(",").map(Number);

  if (coords.length !== 2 || coords.some((coord) => isNaN(coord))) {
    return fallback;
  }

  return {
    x: coords[0],
    y: coords[1],
  };
}

export function getRectFromQuery(name: string, fallback: Rect) {
  const raw = params.get(name);

  if (!raw) {
    return fallback;
  }

  const coords = raw.split(",").map(Number);

  if (
    coords.length !== 4 ||
    coords.some((coord) => isNaN(coord)) ||
    // width and height must be positive
    coords[2] <= 0 ||
    coords[3] <= 0
  ) {
    return fallback;
  }

  return {
    x: coords[0],
    y: coords[1],
    width: coords[2],
    height: coords[3],
  };
}

export function getLineCount(fallback: number) {
  const raw = params.get("lines");

  if (!raw) {
    return fallback;
  }

  const lines = +raw;

  if (lines < 2 || isNaN(lines)) {
    return fallback;
  }

  return lines;
}
