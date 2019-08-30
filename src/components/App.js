import React from "react";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import { Route } from "react-router-dom";
import { ThemeProvider } from "@material-ui/styles";
import { Paper, Grid, Divider } from "@material-ui/core";
import AppBar from "./AppBar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%",
    margin: 0,
    padding: 0
  },
  header: {
    position: "sticky",
    top: 0
  },
  headerBG: {
    backgroundColor: theme.palette.background.default
  },
  text: {
    padding: theme.spacing(2, 2, 0)
  },
  gridItem: {
    width: "50%"
  },
  app: {
    height: "100%",
    display: "flex"
  },
  footer: {
    position: "fixed",
    bottom: 0,
    width: "100%"
  },
  todosMobile: {
    overflowY: "auto",
    height: "75%"
  },
  todosDesktop: {
    overflowY: "auto",
    height: "300px"
  }
}));

const App = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <ThemeProvider theme={props.theme}>
      <Grid
        container
        alignItems={matches ? "center" : "stretch"}
        justify={matches ? "center" : "flex-start"}
        direction={matches ? "column" : "row"}
      >
        <Grid
          item
          xs={matches ? false : 12}
          className={matches ? classes.gridItem : ""}
        >
          <Paper className={classes.root}>
            <Grid item xs={12}>
              <Typography className={classes.text} variant="h5" gutterBottom>
                Todos
              </Typography>
              <Divider />
            </Grid>
            <Grid
              item
              xs={12}
              className={matches ? classes.todosDesktop : classes.todosMobile}
            >
              <Route
                exact
                path="/"
                render={() => <VisibleTodoList cookies={props.cookies} />}
              />
            </Grid>
            <Grid item xs={12} className={matches ? "" : classes.footer}>
              <AddTodo />
              <AppBar />
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
