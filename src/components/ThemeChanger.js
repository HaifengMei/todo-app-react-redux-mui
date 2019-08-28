import React from "react";
import Grid from "@material-ui/core/Grid";
import ThemeSwitcher from "../containers/ThemeSwitcher";

const ThemeChanger = props => {
  return (
    <div>
      <Grid container spacing={2} direction="column" alignItems="center">
        <Grid item>
          <ThemeSwitcher />
        </Grid>
      </Grid>
    </div>
  );
};

export default ThemeChanger;
