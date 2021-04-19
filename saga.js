import { all, call, put, takeLatest } from 'redux-saga/effects';
import { actionTypes, failure, signInSuccess } from './actions';

function* signInSaga({ email, password }) {
  try {
    const res = yield call(fetch, 'https://jsonplaceholder.typicode.com/posts/1');
    yield put(signInSuccess(email));
  } catch (err) {
    yield put(failure(err));
  }
}

function* rootSaga() {
  yield all([takeLatest(actionTypes.SIGN_IN, signInSaga)]);
}

export default rootSaga;
