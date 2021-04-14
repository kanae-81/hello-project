import types from "./actionTypes";

export const test = types.TEST;
export const setErrorMessage = types.SET_ERROR_MESSAGE;
export const setSelectData = types.SET_SELECT_DATA;

export const fetchAllData = {
  start: types.FETCH_ALLDATA_START,
  succeed: types.FETCH_ALLDATA_SUCCEED,
  fail: types.FETCH_ALLDATA_FAIL,
};

export const searchName = {
  start: types.SEARCH_NAME_START,
  succeed: types.SEARCH_NAME_SUCCEED,
  fail: types.SEARCH_NAME_FAIL,
};

export const searchDetails = {
  start: types.SEARCH_DETAILS_START,
  succeed: types.SEARCH_DETAILS_SUCCEED,
  fail: types.SEARCH_DETAILS_FAIL,
};
