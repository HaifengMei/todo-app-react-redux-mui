import { combineReducers } from "redux";
import todos from "./todos";
import visibilityFilter from "./visibilityFilter";
import themeSelected from "./themeSelected";

export default combineReducers({
  todos,
  visibilityFilter,
  themeSelected
});
