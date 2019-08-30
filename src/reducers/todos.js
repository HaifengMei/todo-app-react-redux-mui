import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RECEIVE_TODOS,
  REQUEST_TODOS
} from "../actions";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const initialState = {
  items: [],
  isFetching: false
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return { ...state, isFetching: true };
    case RECEIVE_TODOS:
      const todosCookies = cookies.get("todos");
      return {
        ...state,
        isFetching: false,
        items: todosCookies ? todosCookies : action.todos,
        lastUpdated: action.receivedAt
      };
    case ADD_TODO:
      const todos = [
        {
          ID: action.ID,
          Text: action.Text,
          Completed: false
        },
        ...state.items
      ];
      cookies.set("todos", todos, { path: "/" });
      return {
        ...state,
        items: todos
      };
    case REMOVE_TODO:
      const newTodos = [...state.items];
      newTodos.splice(action.idx, 1);
      cookies.set("todos", newTodos, { path: "/" });
      return {
        ...state,
        items: newTodos
      };
    case TOGGLE_TODO:
      const todosState = state.items.map(todo =>
        todo.ID === action.ID ? { ...todo, Completed: !todo.Completed } : todo
      );
      cookies.set("todos", todosState, { path: "/" });
      return {
        ...state,
        items: todosState
      };
    default:
      return state;
  }
};

export default todos;
