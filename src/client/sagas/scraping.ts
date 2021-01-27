import { takeLatest, fork, all } from 'redux-saga/effects';
import types from '../modules/actionTypes';

function* runLogOut() {
  try {
    console.log('saga')
  } catch (error) {
    console.log('saga')
  }
}

/**
 * ログアウトのActionがdispatchされるのを監視
 */
function* watchLogOut() {
  yield takeLatest(types.TEST, runLogOut);
}

export default function* rootSaga() {
  yield all([fork(watchLogOut)]);
}
