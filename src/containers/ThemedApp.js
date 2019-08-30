import { connect } from "react-redux";
import { getTheme } from "../selectors";
import App from "../components/App";

const mapStateToProps = state => {
  const theme = getTheme(state.themeSelected);
  return {
    theme
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
