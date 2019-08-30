import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Paper, Grid, Divider } from "@material-ui/core";
import AppBar from "./AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  gridItem: {
    width: "50%"
  },
  root: {
    height: "100%",
    margin: 0,
    padding: 0
  },
  app: {
    height: "100%",
    display: "flex"
  }
}));

const App = props => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={props.theme}>
      <Grid container alignItems="center" justify="center" direction="column">
        <Grid item className={classes.gridItem}>
          <Paper>
            <Typography className={classes.text} variant="h5" gutterBottom>
              Todos
            </Typography>
            <Divider />
            <Route
              exact
              path="/"
              render={() => <VisibleTodoList cookies={props.cookies} />}
            />
            <AddTodo />
            <AppBar />
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
