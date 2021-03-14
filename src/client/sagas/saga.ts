import { takeEvery, fork, all, call, put, select } from "redux-saga/effects";
import { searchName } from "../modules/action";
import types from '../modules/actionTypes';
import { selectSearchValue } from "../modules/selectors";

const BASE_URL = "http://localhost:3001/api/v1";

const fetchMembers = async (url: string) => {
    const encoded = encodeURI(url);
    const res =  await fetch(encoded);
    const result = await res.json()
    return result;
};

function* searchMemberName() {
    try {
        const searchValue = yield select(selectSearchValue);
        const url = BASE_URL + "/search?q=" + searchValue.name;
        const result = yield call(fetchMembers, url);
        if(result.length) {
            yield put(searchName.succeed(result));
        }else {
            yield put(searchName.fail('条件に一致するメンバーが見つかりません'));
        }
    } catch (error) {
        yield put(searchName.fail(error));
    }
}

function* searchMemberDetail() {
  try {
    const searchValue = yield select(selectSearchValue);
  const url = `${BASE_URL}/search/detail?color=${searchValue.select.color}&group=${searchValue.select.group}`;
    const result = yield call(fetchMembers, url);
    if (result.length) {
      yield put(searchName.succeed(result));
    } else {
      yield put(searchName.fail("条件に一致するメンバーが見つかりません"));
    }
  } catch (error) {
    yield put(searchName.fail(error));
  }
}

/**
 * ログアウトのActionがdispatchされるのを監視
 */
function* watchSearchAction() {
    yield takeEvery(types.SEARCH_NAME_START, searchMemberName);
    yield takeEvery(types.SEARCH_DETAILS_START, searchMemberDetail);
}

export default function* rootSaga() {
    yield all([fork(watchSearchAction)]);
}