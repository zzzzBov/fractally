import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface DataServiceState {
  dragging: boolean;
  baseline: Line;
  gripline: Line;
}

const initialState: DataServiceState = {
  dragging: false,
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
};

export default createSlice({
  name: "data",
  initialState,
  reducers: {
    drag(
      state,
      {
        payload,
      }: PayloadAction<{
        grip: "start" | "end";
        point: Point;
      }>
    ) {
      state.gripline[payload.grip] = payload.point;
    },
    startDragging(state) {
      state.dragging = true;
    },
    stopDragging(state) {
      state.dragging = false;
    },
  },
});
