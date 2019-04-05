import ReactDOM from "react-dom";
import "./index.css";
import "materialize-css/dist/css/materialize.min.css";
// import * as serviceWorker from "./serviceWorker";

import { getRoutes } from "./Routes";

const routes = getRoutes();

ReactDOM.render(routes, document.getElementById("root"));


