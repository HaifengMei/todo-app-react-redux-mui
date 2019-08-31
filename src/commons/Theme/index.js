import { createMuiTheme } from "@material-ui/core/styles";
import {
  green,
  brown,
  orange,
  blue,
  grey,
  amber,
  yellow
} from "@material-ui/core/colors";

export const summerTheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: blue,
    background: {
      default: "#ffee58"
    }
  }
});

export const winterTheme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: grey,
    background: {
      default: "#e0e0e0",
      light: "#f5f5f5"
    }
  }
});

export const autumnTheme = createMuiTheme({
  palette: {
    primary: amber,
    secondary: orange,
    background: {
      default: "#ffca28"
    }
  }
});

export const springTheme = createMuiTheme({
  palette: {
    primary: green,
    secondary: brown,
    background: {
      default: "#66bb6a"
    }
  }
});
