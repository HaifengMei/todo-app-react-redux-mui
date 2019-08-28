import React from "react";
import { withStyles } from "@material-ui/styles";
import styles from "../Taskboard/styles";

const Taskboard = props => {
  console.log(props);
  const { classes } = props;
  return (
    <div className={classes.taskboard}>
      <div className={classes.shape}>ReactJs</div>
      <div className={classes.shape}>Angular</div>
    </div>
  );
};

export default withStyles(styles)(Taskboard);
