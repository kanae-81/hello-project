import { takeEvery, fork, all, call, put, select } from "redux-saga/effects";
import { searchName } from "../modules/action";
import types from '../modules/actionTypes';
import { selectSearchValue } from "../modules/selectors";

const BASE_URL = "http://localhost:3001/api/v1";

const fetchMembers = async (query: string) => {
    const uri = BASE_URL + "/search?q=" + query;
    const encoded = encodeURI(uri);
    const res =  await fetch(encoded);
    const result = await res.json()
    return result;
};

function* searchMembers() {
    try {
        const searchValue = yield select(selectSearchValue);
        const result = yield call(fetchMembers, searchValue.name);
        if(result.length) {
            console.log('succeed', result.length)
            yield put(searchName.succeed(result));
        }else {
            console.log('error', result.length);
            yield put(searchName.fail('条件に一致するメンバーが見つかりません'));
        }
    } catch (error) {
        yield put(searchName.fail(error));
    }
}

/**
 * ログアウトのActionがdispatchされるのを監視
 */
function* watchSearchAction() {
    yield takeEvery(types.SEARCH_NAME_START, searchMembers);
}

export default function* rootSaga() {
    yield all([fork(watchSearchAction)]);
}
