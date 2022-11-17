import React from "react";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router";

import { Login } from "./pages/login";
import { Dashboard } from "./pages/dashboard";
import { Register } from "./pages/register";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Login></Login>
        </Route>
        <Route exact path="/dashboard">
          <Dashboard></Dashboard>
        </Route>
        <Route exact path="/register">
          <Register></Register>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
