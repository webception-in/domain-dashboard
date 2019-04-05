import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import HomePage from "./components/HomePage";
import { Login, Logout } from "./components/User";

export const getRoutes = () => {
  return (
    <Router>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route path="/app" component={Dashboard} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
      </div>
    </Router>
  );
};
