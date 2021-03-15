import types from './actionTypes';

export const test = (test:any) => ({
type: types.TEST,
payload: test,
});

export const setErrorMessage = (message: string) => ({
    type: types.SET_ERROR_MESSAGE,
    payload: message,
});

export const setSelectData = (id: string, value: string) => ({
    type: types.SET_SELECT_DATA,
    payload: {
        id: id,
        value: value
    },
});


export const fetchAllData = {
  start: () => ({
    type: types.FETCH_ALLDATA_START,
  }),
  succeed: (value: any) => ({
    type: types.FETCH_ALLDATA_SUCCEED,
    payload: value,
  }),
  fail: (message: string) => ({
    type: types.FETCH_ALLDATA_FAIL,
    payload: message,
  }),
};

export const searchName = {
    start: (value: string) => ({
        type: types.SEARCH_NAME_START,
        payload: value,
    }),
    succeed: (value: any) => ({
        type: types.SEARCH_NAME_SUCCEED,
        payload: value,
    }),
    fail: (message: string) => ({
        type: types.SEARCH_NAME_FAIL,
        payload: message,
    }),
};

export const searchDetails = {
  start: () => ({
    type: types.SEARCH_DETAILS_START,
  }),
  succeed: (value: any) => ({
    type: types.SEARCH_DETAILS_SUCCEED,
    payload: value,
  }),
  fail: (message: string) => ({
    type: types.SEARCH_DETAILS_FAIL,
    payload: message,
  }),
};
