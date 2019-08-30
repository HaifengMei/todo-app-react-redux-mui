import { take, call, put, fork } from "redux-saga/effects";
import * as actions from "../actions";
import { api } from "../services";
import Cookies from "universal-cookie";
const cookies = new Cookies();

export function* invalidateTodos() {
  while (true) {
    yield take(actions.INVALIDATE_TODOS);
    yield call(fetchTodos);
  }
}

export function* fetchTodos() {
  yield put(actions.requestTodos());

  const todosCookies = cookies.get("todos");
  let todos = todosCookies || [];
  // if (todosCookies) {
  //   todos = todosCookies;
  // } else {
  //   todos = yield call(api.fetchTodos);
  //   cookies.set("todos", todos, { path: "/" });
  // }
  yield put(actions.receiveTodos(todos));
}

export function* startup() {
  yield fork(fetchTodos);
}

export default function* rootSaga() {
  yield fork(startup);
  yield fork(invalidateTodos);
}
