import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import ThemeSwitcher from "../containers/ThemeSwitcher";
import FilterTodos from "../containers/FilterTodos";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary
  },
  fabButton: {
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto"
  }
}));

const TodoApBar = props => {
  const classes = useStyles(props);

  return (
    <AppBar
      elevation={0}
      position="sticky"
      color="primary"
      className={classes.appBar}
    >
      <Toolbar>
        <FilterTodos />
        <div className={classes.grow} />

        <ThemeSwitcher edge="end" aria-label="theme-switcher" />
      </Toolbar>
    </AppBar>
  );
};

export default TodoApBar;
