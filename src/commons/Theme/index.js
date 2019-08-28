import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  color: {
    primary: "#D32F2F",
    secondary: "#00BCD4",
    error: "#E64A19"
  },
  typograph: {
    fontFamily: "Roboto"
  },
  shape: {
    borderRadisu: 4,
    textColor: "#FFFFFF",
    backgroundColor: "#7B1FA2",
    border: "#CCCCCC"
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});
