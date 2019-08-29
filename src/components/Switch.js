import React from "react";
import { ThemeSelectors } from "../actions";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import DayIcon from "@material-ui/icons/WbSunnyRounded";
import NightIcon from "@material-ui/icons/Brightness2";
import PropTypes from "prop-types";

const { DARK, LIGHT } = ThemeSelectors;

const ThemeSwitcher = ({ changeTheme, darkMode }) => {
  function handleChange(event, darkMode) {
    const theme = darkMode ? DARK : LIGHT;
    changeTheme(theme);
  }

  return (
    <Typography component="div">
      <Grid component="label" container alignItems="center" spacing={1}>
        <Grid item>
          <DayIcon />
        </Grid>
        <Grid item>
          <Switch checked={darkMode} onChange={handleChange} />
        </Grid>
        <Grid item>
          <NightIcon />
        </Grid>
      </Grid>
    </Typography>
  );
};

ThemeSwitcher.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default ThemeSwitcher;
