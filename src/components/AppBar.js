import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import FilterTodos from "../containers/FilterTodos";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
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
    backgroundColor: theme.palette.primary.main
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
        <Typography className={classes.title} variant="h6">
          To Dos
        </Typography>
        <div className={classes.grow} />
        <FilterTodos />
      </Toolbar>
    </AppBar>
  );
};

export default TodoApBar;
