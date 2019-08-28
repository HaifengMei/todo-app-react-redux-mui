import { take, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { api } from "../services";

export function* invalidateTodos() {
  while (true) {
    yield take(actions.INVALIDATE_TODOS);
    yield call(fetchTodos);
  }
}

export function* fetchTodos() {
  yield put(actions.requestTodos());
  const todos = yield call(api.fetchTodos);
  yield put(actions.receiveTodos(todos));
}

export function* startup() {
  yield fork(fetchTodos);
}

export default function* rootSaga() {
  yield fork(startup);
  yield fork(invalidateTodos);
}
