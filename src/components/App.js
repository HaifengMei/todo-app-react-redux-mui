import React from "react";
import Footer from "./Footer";
import AddTodo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import NavigationContainer from "../containers/NavigationContainer";
import { Route } from "react-router-dom";
import { withCookies } from "react-cookie";
import { ThemeProvider } from "@material-ui/styles";
import Taskboard from "./Taskboard";
import theme from "../commons/Theme";
import ThemeChanger from "./ThemeChanger";
import { withStyles } from "@material-ui/core";
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
      <Route exact path="/" component={VisibleTodoList} />
      <ThemeChanger />
    </ThemeProvider>
  );
};

export default App;
