import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import globalState from "./redux/store/";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={globalState}>
    <App />
  </Provider>,
  document.getElementById("root")
);
