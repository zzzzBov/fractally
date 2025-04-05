import { DataServiceState } from "@/slices/DataService";
import { createContext } from "react";

type DataService = DataServiceState; // & DataServiceActions

export const DataServiceContext = createContext<DataService>({
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
});
