import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";
import TextField from "@material-ui/core/TextField";
import { Paper, Button, Divider, Grid } from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SendIcon from "@material-ui/icons/Send";
import Cookies from "universal-cookie";
const cookies = new Cookies();

const AddTodo = ({ dispatch }) => {
  const textCookie = cookies.get("text") ? cookies.get("text") : "";

  const [text, setText] = useState(textCookie);
  const [error, setError] = useState(false);
  function handleSubmit() {
    if (text && text.trim() !== "") {
      dispatch(addTodo(text));
      setError(false);
      setText("");
    } else {
      setError(true);
    }
  }

  function handleChange(event) {
    cookies.set("text", event.target.value, { path: "/" });
    setText(event.target.value);
  }

  function onKeyPressed(event) {
    if (event.key === "Enter") {
      handleSubmit();
    }
  }

  return (
    <TextField
      id="text"
      label="Whatcha want to do?"
      margin="normal"
      variant="filled"
      value={text}
      error={error}
      fullWidth
      onChange={handleChange}
      onKeyPress={onKeyPressed}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              edge="end"
              aria-label="add todo"
              onClick={handleSubmit}
              disabled={text.trim() == ""}
            >
              <SendIcon />
            </IconButton>
          </InputAdornment>
        )
      }}
    />
  );
};

export default connect()(AddTodo);
