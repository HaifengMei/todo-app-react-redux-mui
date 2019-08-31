/*
 * action types
 */

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const SET_VISIBILITY_FILTER = "SET_VISIBILITY_FILTER";
export const REQUEST_TODOS = "REQUEST_TODOS";
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const INVALIDATE_TODOS = "INVALIDATE_TODOS";

export const SET_THEME_SELECTED = "SET_THEME_SELECTED";

export const addTodo = Text => ({
  type: ADD_TODO,
  ID: new Date().getTime(),
  Text
});

export const removeTodo = idx => ({
  type: REMOVE_TODO,
  idx
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
});

export const toggleTodo = ID => ({
  type: TOGGLE_TODO,
  ID
});

export const invalidateTodos = () => ({
  type: INVALIDATE_TODOS
});

export const requestTodos = () => ({
  type: REQUEST_TODOS
});

export const receiveTodos = todos => ({
  type: RECEIVE_TODOS,
  todos,
  receivedAt: new Date().setMilliseconds(0)
});

export const VisibilityFilters = {
  SHOW_ALL: "SHOW_ALL",
  SHOW_COMPLETED: "SHOW_COMPLETED",
  SHOW_ACTIVE: "SHOW_ACTIVE"
};

export const ThemeSelectors = {
  AUTUMN: "AUTUMN",
  WINTER: "WINTER",
  SUMMER: "SUMMER",
  SPRING: "SPRING"
};

export const setThemeSelected = themeSelected => ({
  type: SET_THEME_SELECTED,
  themeSelected
});
