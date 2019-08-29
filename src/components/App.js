import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import NavigationContainer from "../containers/NavigationContainer";
import { Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import { ThemeProvider } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import { Container } from "@material-ui/core";
import AppBar from "./AppBar";

const App = props => {
  console.log(props.theme);
  return (
    <ThemeProvider theme={props.theme}>
      {/* <Taskboard /> */}
      {/* <Container>
      <Row className="row">
        <Col xs={12}>
          <h1>To Do List</h1>
          <NavigationContainer />
          <AddTodo />
          <Route
            exact
            path="/"
            render={() => <VisibleTodoList cookies={props.cookies} />}
          />
          <Footer />
        </Col>
      </Row>
    </Container> */}
      <Container maxWidth="lg">
        <AppBar />
        <Paper>
          <Route exact path="/" component={VisibleTodoList} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default App;
