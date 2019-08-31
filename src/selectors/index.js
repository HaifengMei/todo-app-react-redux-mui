import { createSelector } from "reselect";
import { VisibilityFilters, ThemeSelectors } from "../actions";
import {
  winterTheme,
  autumnTheme,
  springTheme,
  summerTheme
} from "../commons/Theme";
const { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } = VisibilityFilters;
const { WINTER, SUMMER, AUTUMN } = ThemeSelectors;
const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos.items;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter(t => t.Completed);
      case SHOW_ACTIVE:
        return todos.filter(t => !t.Completed);
      default:
        return todos;
    }
  }
);

export const getTheme = themeSelected => {
  switch (themeSelected) {
    case WINTER:
      return winterTheme;
    case AUTUMN:
      return autumnTheme;
    case SUMMER:
      return summerTheme;
    default:
      return springTheme;
  }
};
