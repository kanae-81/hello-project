import { createSelector } from "reselect";

export const selectSearchValue = createSelector(
  [(state:any) => state.search],
  (state:any) => state
);

export const selectError = createSelector(
  [(state: any) => state.error],
  (state: any) => state
);

export const selectLoading = createSelector(
  [(state: any) => state.isLoading],
  (state: any) => state
);

export const selectMembers = createSelector(
    [(state: any) => state.members],
    (state: any) => state
);
