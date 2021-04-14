import { createSelector } from "reselect";
import { InitialState, Search } from "./reducers";
import { Member } from "../types/index";

export const selectSearchValue = createSelector(
  [(state: InitialState) => state.search],
  (state: Search) => state
);

export const selectError = createSelector(
  [(state: InitialState) => state.error],
  (state: string) => state
);

export const selectLoading = createSelector(
  [(state: InitialState) => state.isLoading],
  (state: boolean) => state
);

export const selectMembers = createSelector(
  [(state: InitialState) => state.members],
  (state: Member[]) => state
);
