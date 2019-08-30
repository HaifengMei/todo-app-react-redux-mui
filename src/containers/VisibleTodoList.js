import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toggleTodo, invalidateTodos, removeTodo } from "../actions";
import TodoList from "../components/TodoList";
import { getVisibleTodos } from "../selectors";
import EmptyTodoList from "../components/EmptyTodoList";
function VisibleTodoList(props) {
  const {
    todos,
    isFetching,
    lastUpdated,
    refreshTodos,
    toggleTodo,
    removeTodo,
    cookies
  } = props;

  function handleRefreshClick(e) {
    e.preventDefault();
    refreshTodos();
  }

  return (
    <div>
      {/* <p>
        {lastUpdated && (
          <span>
            Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{" "}
          </span>
        )}
        {!isFetching && <button onClick={handleRefreshClick}>Refresh</button>}
      </p> */}
      {isFetching && todos.length === 0 && <h2>Loading...</h2>}
      {!isFetching && todos.length === 0 && <EmptyTodoList />}
      {todos.length > 0 && (
        <div style={{ opacity: isFetching ? 0.5 : 1 }}>
          <TodoList
            todos={todos}
            toggleTodo={toggleTodo}
            removeTodo={removeTodo}
          />
        </div>
      )}
    </div>
  );
}

VisibleTodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  refreshTodos: PropTypes.func.isRequired
};

function mapStateToProps(state, ownProps) {
  let { isFetching, lastUpdated } = state.todos || {
    isFetching: true,
    todos: []
  };

  const todos = getVisibleTodos(state);

  return {
    todos,
    isFetching,
    lastUpdated,
    cookies: ownProps.cookies
  };
}

const mapDispatchToProps = dispatch => ({
  removeTodo: ID => dispatch(removeTodo(ID)),
  toggleTodo: ID => dispatch(toggleTodo(ID)),
  refreshTodos: () => dispatch(invalidateTodos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
