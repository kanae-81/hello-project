import { createSelector } from "reselect";

export const selectTest = createSelector(
  [(state:any) => state.test],
  (test:any) => test
);
