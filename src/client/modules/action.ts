import types from './actionTypes';

// デイリーデータを編集用にコピー
export const test = (test:any) => ({
  type: types.TEST,
  payload: test,
});
