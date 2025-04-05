import { DataServiceState, Point } from "@/slices/DataService";
import { createContext } from "react";

interface DataServiceActions {
  center: () => void;
  drag: (payload: { grip: "start" | "end"; point: Point }) => void;
  startDragging: () => void;
  stopDragging: () => void;
  startPanning: (payload: Point) => void;
  pan: (payload: Point) => void;
  stopPanning: () => void;
}

type DataService = DataServiceState & DataServiceActions;

export const DataServiceContext = createContext<DataService>({
  status: "idle",
  baseline: {
    start: {
      x: 0,
      y: 0,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
  gripline: {
    start: {
      x: 0,
      y: 0,
    },
    end: {
      x: 0,
      y: 0,
    },
  },
  panning: {
    last: {
      x: 0,
      y: 0,
    },
  },
  viewport: {
    x: 0,
    y: 0,
    width: 16,
    height: 16,
  },
  center() {
    // noop
  },
  drag() {
    // noop
  },
  startDragging() {
    // noop
  },
  stopDragging() {
    // noop
  },
  startPanning() {
    // noop
  },
  pan() {
    // noop
  },
  stopPanning() {
    // noop
  },
});
