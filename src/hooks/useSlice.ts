import {
  bindActionCreators,
  Slice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";
import { useMemo, useReducer } from "react";

export function useSlice<
  State = unknown,
  CaseReducers extends SliceCaseReducers<State> = SliceCaseReducers<State>,
  Name extends string = string,
  ReducerPath extends string = Name,
  Selectors extends SliceSelectors<State> = SliceSelectors<State>
>(slice: Slice<State, CaseReducers, Name, ReducerPath, Selectors>) {
  const [state, dispatch] = useReducer(slice.reducer, slice.getInitialState());

  const actions = useMemo(
    () =>
      bindActionCreators(slice.actions, (action) => {
        dispatch(action);
        return action;
      }),
    [slice.actions]
  );

  return [state, actions] as const;
}
