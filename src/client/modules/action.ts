import types from './actionTypes';

export const test = (test:any) => ({
type: types.TEST,
payload: test,
});

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
