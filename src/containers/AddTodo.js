import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <Form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <Form.Group controlId="formBasicEmail">
          <InputGroup>
            <Form.Control
              type="Text"
              placeholder="Enter an item"
              ref={node => (input = node)}
            />
            <InputGroup.Append>
              <Button type="submit">Add To-Do</Button>
            </InputGroup.Append>
          </InputGroup>
        </Form.Group>
      </Form>
    </div>
  );
};

export default connect()(AddTodo);
