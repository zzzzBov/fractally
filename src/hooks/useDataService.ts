import { DataServiceContext } from "@/contexts/DataService";
import { use } from "react";

export function useDataService() {
  return use(DataServiceContext);
}
