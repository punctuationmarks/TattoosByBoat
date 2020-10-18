import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import UserProvider from "./providers/UserProvider";
import "bootstrap/dist/css/bootstrap.css";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById("root")
);
serviceWorker.unregister();
