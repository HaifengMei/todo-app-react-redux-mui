import React from "react";
import { connect } from "react-redux";
import { setThemeSelected, ThemeSelectors } from "../../actions";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";
import { withStyles } from "@material-ui/core";
import styles from "../ThemeSwitcher/styles";

const { LIGHT, DARK } = ThemeSelectors;

function themeSwitcher(props) {
  console.log(props);
  const { changeTheme, themeSelected, classes } = props;

  function handleChange(event, value) {
    changeTheme(value);
  }

  const children = [
    <ToggleButton key={1} value={LIGHT}>
      Light
    </ToggleButton>,
    <ToggleButton key={2} value={DARK}>
      Dark
    </ToggleButton>
  ];

  return (
    <ToggleButtonGroup
      size="large"
      value={themeSelected}
      exclusive
      onChange={handleChange}
    >
      {children}
    </ToggleButtonGroup>
  );
}

const mapStateToProps = state => {
  return {
    themeSelected: state.themeSelected
  };
};

const mapDispatchToProps = dispatch => ({
  changeTheme: themeSelected => dispatch(setThemeSelected(themeSelected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(themeSwitcher));
