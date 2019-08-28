import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavigationBar = styled.div`
  margin-bottom: 15px;
  background-color: lightgray;
`;

export default ({ user }) => (
  <NavigationBar>
    <Link className="btn btn-primary" to="/">
      To-Do List
    </Link>
  </NavigationBar>
);
