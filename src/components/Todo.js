import React from "react";
import PropTypes from "prop-types";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/DeleteForever";
import Tooltip from "@material-ui/core/Tooltip";

const Todo = ({ onClick, onRemove, Completed, Text, ID, classes }) => (
  <ListItem dense button onClick={onClick}>
    <ListItemIcon>
      <Checkbox
        edge="start"
        checked={Completed}
        tabIndex={-1}
        disableRipple
        inputProps={{ "aria-labelledby": ID }}
      />
    </ListItemIcon>
    <ListItemText
      id={ID}
      primary={Text}
      style={{
        textDecoration: Completed ? "line-through" : "none"
      }}
    />
    <ListItemSecondaryAction>
      <Tooltip title="Remove todo">
        <IconButton edge="end" aria-label="delete" onClick={onRemove}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </ListItemSecondaryAction>
  </ListItem>
);

Todo.propTypes = {
  ID: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  Completed: PropTypes.bool.isRequired,
  Text: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired
};

export default Todo;
