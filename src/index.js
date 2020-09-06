import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.min.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <Weather />
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
