import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./index.css";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(<App />, document.querySelector("#root"));
