import { ThemeSelectors, SET_THEME_SELECTED } from "../actions";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const { AUTUMN } = ThemeSelectors;

const initialState = cookies.get("theme") || AUTUMN;

const themeSelected = (state = initialState, action) => {
  switch (action.type) {
    case SET_THEME_SELECTED:
      cookies.set("theme", action.themeSelected, { path: "/" });
      return action.themeSelected;
    default:
      return state;
  }
};

export default themeSelected;
