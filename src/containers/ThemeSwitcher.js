import { connect } from "react-redux";
import { setThemeSelected } from "../actions";
import Switch from "../components/Switch";
import { ThemeSelectors } from "../actions";
const { WINTER } = ThemeSelectors;

const mapStateToProps = state => {
  return {
    darkMode: state.themeSelected === WINTER,
    themeSelected: state.themeSelected
  };
};

const mapDispatchToProps = dispatch => ({
  changeTheme: themeSelected => dispatch(setThemeSelected(themeSelected))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Switch);
