import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Grid, Divider } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  header: {
    backgroundColor: theme.palette.primary.main
  },
  text: {
    padding: theme.spacing(2, 2, 0)
  }
}));

const AppHeader = () => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.header}>
      <Typography className={classes.text} variant="h5" gutterBottom>
        To - Dos
      </Typography>
      <Divider />
    </Grid>
  );
};

export default AppHeader;
