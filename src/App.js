import React, { Component } from "react";
import Login from "./components/login/login";
import Signup from "./components/signup/signup";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {
  render() {
    return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/Signup">
            <Signup />
          </Route>
          {/* <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
