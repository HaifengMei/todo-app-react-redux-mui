import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";
import rootSaga from "./sagas";
import { BrowserRouter } from "react-router-dom";
import "typeface-roboto";
import ThemedApp from "./containers/ThemedApp";
import "./index.css";

const store = configureStore();

store.runSaga(rootSaga);

render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemedApp />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your ThemedApp to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
