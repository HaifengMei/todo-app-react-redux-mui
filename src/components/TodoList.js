import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import List from "@material-ui/core/List";

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <List>
    {todos.map((todo, idx) => (
      <Todo
        key={todo.ID}
        {...todo}
        onClick={() => toggleTodo(todo.ID)}
        onRemove={() => removeTodo(idx)}
      />
    ))}
  </List>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      ID: PropTypes.number.isRequired,
      Completed: PropTypes.bool.isRequired,
      Text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired
};

export default TodoList;
