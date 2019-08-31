import React from "react";
import { ThemeSelectors } from "../actions";
import PropTypes from "prop-types";

import WinterIcon from "@material-ui/icons/AcUnit";
import Springicon from "@material-ui/icons/LocalFlorist";
import SummerIcon from "@material-ui/icons/WbSunny";
import AutumnIcon from "@material-ui/icons/Spa";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { makeStyles } from "@material-ui/core/styles";

const { WINTER, AUTUMN, SPRING, SUMMER } = ThemeSelectors;

const useStyles = makeStyles(theme => ({
  switch: {
    backgroundColor: theme.palette.background.default
  }
}));

const ThemeSwitcher = props => {
  const { changeTheme, darkMode, themeSelected } = props;
  const classes = useStyles();

  function handleChange(event) {
    changeTheme(event.target.value);
  }

  return (
    <BottomNavigation
      value={themeSelected}
      onChange={(event, newValue) => changeTheme(newValue)}
      showLabels
    >
      <BottomNavigationAction
        value={SPRING}
        label="Spring"
        icon={<Springicon />}
      />
      <BottomNavigationAction
        value={SUMMER}
        label="Summer"
        icon={<SummerIcon />}
      />
      <BottomNavigationAction
        value={AUTUMN}
        label="AUTUMN"
        icon={<AutumnIcon />}
      />
      <BottomNavigationAction
        value={WINTER}
        label="Winter"
        icon={<WinterIcon />}
      />
    </BottomNavigation>
  );
};

ThemeSwitcher.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default ThemeSwitcher;
