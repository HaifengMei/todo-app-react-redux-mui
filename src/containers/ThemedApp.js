import { connect } from "react-redux";
import { setThemeSelected } from "../actions";
import Link from "../components/Link";
import { getTheme } from "../selectors";
import App from "../components/App";

const mapStateToProps = (state, ownProps) => {
  const theme = getTheme(state.themeSelected);
  return {
    theme
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
