import { useSlice } from "@/hooks/useSlice";
import { DataServiceContext } from "@/contexts/DataService";
import DataService from "@/slices/DataService";
import { PropsWithChildren, useMemo } from "react";

export function Data({ children }: PropsWithChildren) {
  const [state, actions] = useSlice(DataService);

  const service = useMemo(
    () => ({
      ...state,
      ...actions,
    }),
    [state, actions]
  );

  return <DataServiceContext value={service}>{children}</DataServiceContext>;
}
