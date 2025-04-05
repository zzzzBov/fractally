import { createSlice } from "@reduxjs/toolkit";

interface Point {
  x: number;
  y: number;
}

interface Line {
  start: Point;
  end: Point;
}

export interface DataServiceState {
  baseline: Line;
  gripline: Line;
}

const initialState = {
  baseline: {
    start: {
      x: 4,
      y: 8,
    },
    end: {
      x: 12,
      y: 8,
    },
  },
  gripline: {
    start: {
      x: 12.2,
      y: 7.4,
    },
    end: {
      x: 6.9,
      y: 2.1,
    },
  },
} satisfies DataServiceState;

export default createSlice({
  name: "data",
  initialState,
  reducers: {},
});
