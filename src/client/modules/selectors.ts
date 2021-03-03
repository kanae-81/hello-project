import { createSelector } from "reselect";

export const selectSearchValue = createSelector(
  [(state:any) => state.search],
  (state:any) => state
);
