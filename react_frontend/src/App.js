import React from "react";
import "./app.scss";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./react/header/Header";
import Dashboard from "./react/dashboard/Dashboard";
import AddProject from "./react/addProject/AddProject";

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/addproject" component={AddProject} />
      </div>
    </Router>
  );
}

export default App;
