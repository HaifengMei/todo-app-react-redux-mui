import { SET_VISIBILITY_FILTER, VisibilityFilters } from "../actions";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const { SHOW_ALL } = VisibilityFilters;
const initialState = cookies.get("visibilityFilter") || SHOW_ALL;

const visibilityFilter = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      cookies.set("visibilityFilter", action.filter, { path: "/" });
      return action.filter;
    default:
      return state;
  }
};

export default visibilityFilter;
