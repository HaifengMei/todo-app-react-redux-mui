import color from "@material-ui/core/colors/indigo";

const styles = theme => ({
  taskboard: {
    display: "flex",
    alignItem: "center"
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderColor: "#CCCCCC",
    padding: 20,
    margin: 10
    // borderRadius: 4
  }
});

export default styles;
