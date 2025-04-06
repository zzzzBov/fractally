import { getLineCount, getPointFromQuery, getRectFromQuery } from "@/lib/url";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Point {
  x: number;
  y: number;
}

export interface Line {
  start: Point;
  end: Point;
}

export interface Rect extends Point {
  width: number;
  height: number;
}

interface PanningMetadata {
  last: Point;
}

export interface DataServiceState {
  status: "idle" | "dragging" | "panning";
  baseline: Line;
  gripline: Line;
  viewport: Rect;
  panning: PanningMetadata;
  lineCount: number;
}

const initialState: DataServiceState = {
  status: "idle",
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
    start: getPointFromQuery("start", {
      x: 12.2,
      y: 7.4,
    }),
    end: getPointFromQuery("end", {
      x: 6.9,
      y: 2.1,
    }),
  },
  panning: {
    last: {
      x: 0,
      y: 0,
    },
  },
  viewport: getRectFromQuery("viewport", {
    x: 0,
    y: 0,
    width: 16,
    height: 16,
  }),
  lineCount: getLineCount(64),
};

export default createSlice({
  name: "data",
  initialState,
  reducers: {
    center(state) {
      state.viewport.x = 0;
      state.viewport.y = 0;
      state.viewport.width = 16;
      state.viewport.height = 16;
    },
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
      if (state.status === "idle") {
        state.status = "dragging";
      }
    },
    stopDragging(state) {
      if (state.status === "dragging") {
        state.status = "idle";
      }
    },
    startPanning(state, { payload }: PayloadAction<Point>) {
      if (state.status === "idle") {
        state.status = "panning";

        state.panning.last = payload;
      }
    },
    pan(state, { payload }: PayloadAction<Point>) {
      if (state.status === "panning") {
        state.viewport.x = state.viewport.x + state.panning.last.x - payload.x;
        state.viewport.y = state.viewport.y + state.panning.last.y - payload.y;
      }
    },
    stopPanning(state) {
      if (state.status === "panning") {
        state.status = "idle";
      }
    },
    zoom(
      state,
      {
        payload,
      }: PayloadAction<{
        center?: Point;
        zoom: number;
      }>
    ) {
      const center = payload.center ?? {
        x: state.viewport.x + (state.viewport.width - state.viewport.x) / 2,
        y: state.viewport.y + (state.viewport.height - state.viewport.y) / 2,
      };
      const delta = {
        x: center.x - state.viewport.x,
        y: center.y - state.viewport.y,
      };

      state.viewport.x = center.x - delta.x * payload.zoom;
      state.viewport.y = center.y - delta.y * payload.zoom;
      state.viewport.width *= payload.zoom;
      state.viewport.height *= payload.zoom;
    },
  },
});
