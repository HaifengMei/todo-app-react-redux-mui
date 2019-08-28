import {
  ADD_TODO,
  REMOVE_TODO,
  TOGGLE_TODO,
  RECEIVE_TODOS,
  REQUEST_TODOS
} from "../actions";

const initialState = {
  items: [],
  isFetching: false
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TODOS:
      return { ...state, isFetching: true };
    case RECEIVE_TODOS:
      return {
        ...state,
        isFetching: false,
        items: action.todos,
        lastUpdated: action.receivedAt
      };
    case ADD_TODO:
      return {
        ...state,
        items: [
          {
            ID: action.ID,
            Text: action.Text,
            Completed: false
          },
          ...state.items
        ]
      };
    case REMOVE_TODO:
      const newTodos = [...state.items];
      newTodos.splice(action.idx, 1);
      return {
        ...state,
        items: newTodos
      };
    case TOGGLE_TODO:
      return {
        ...state,
        items: state.items.map(todo =>
          todo.ID === action.ID ? { ...todo, Completed: !todo.Completed } : todo
        )
      };
    default:
      return state;
  }
};

export default todos;
