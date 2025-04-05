import { DataServiceState, Point } from "@/slices/DataService";
import { createContext } from "react";

interface DataServiceActions {
  drag: (payload: { grip: "start" | "end"; point: Point }) => void;
  startDragging: () => void;
  stopDragging: () => void;
}

type DataService = DataServiceState & DataServiceActions;

export const DataServiceContext = createContext<DataService>({
  dragging: false,
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
  drag() {
    // noop
  },
  startDragging() {
    // noop
  },
  stopDragging() {
    // noop
  },
});
