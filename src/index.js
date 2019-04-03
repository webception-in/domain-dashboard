import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
// import { BrowserRouter, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

// ReactDOM.render(
//   <BrowserRouter>
//     <div>
//       <Route exact path="/app" component={Dashboard} />
//       <Route exact path="/login" component={Login} />
//     </div>
//   </BrowserRouter>,
//   document.getElementById("root")
// );

ReactDOM.render(<Dashboard />, document.getElementById("root"));
serviceWorker.register();
