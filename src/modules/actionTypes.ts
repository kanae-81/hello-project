import actionCreateFactory from "typescript-fsa";
import { Member } from "../types";

const actionCreator = actionCreateFactory();
const TEST = actionCreator<string>("TEST");

const FETCH_ALLDATA_START = actionCreator<void>("FETCH_ALLDATA_START");
const FETCH_ALLDATA_SUCCEED = actionCreator<Member[]>("FETCH_ALLDATA_SUCCEED");
const FETCH_ALLDATA_FAIL = actionCreator<string>("FETCH_ALLDATA_FAIL");

const SEARCH_NAME_START = actionCreator<string>("SEARCH_NAME_START");
const SEARCH_NAME_SUCCEED = actionCreator<Member[]>("SEARCH_NAME_SUCCEED");
const SEARCH_NAME_FAIL = actionCreator<string>("SEARCH_NAME_FAIL");

const SEARCH_DETAILS_START = actionCreator<void>("SEARCH_DETAILS_START");
const SEARCH_DETAILS_SUCCEED = actionCreator<Member[]>(
  "SEARCH_DETAILS_SUCCEED"
);
const SEARCH_DETAILS_FAIL = actionCreator<string>("SEARCH_DETAILS_FAIL");

const SET_ERROR_MESSAGE = actionCreator<string>("SET_ERROR_MESSAGE");

const SET_SELECT_DATA = actionCreator<{ id: string; value: string }>(
  "SET_SELECT_DATA"
);

export default {
  TEST,
  FETCH_ALLDATA_START,
  FETCH_ALLDATA_SUCCEED,
  FETCH_ALLDATA_FAIL,
  SEARCH_NAME_START,
  SEARCH_NAME_SUCCEED,
  SEARCH_NAME_FAIL,
  SEARCH_DETAILS_START,
  SEARCH_DETAILS_SUCCEED,
  SEARCH_DETAILS_FAIL,
  SET_ERROR_MESSAGE,
  SET_SELECT_DATA,
};
