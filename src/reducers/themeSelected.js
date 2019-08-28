import { ThemeSelectors, SET_THEME_SELECTED } from "../actions";

const { LIGHT } = ThemeSelectors;

const themeSelected = (state = LIGHT, action) => {
  switch (action.type) {
    case SET_THEME_SELECTED:
      return action.themeSelected;
    default:
      return state;
  }
};

export default themeSelected;
