import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "./style2.css";
import LiftingState from "./Components/LiftingStateOpgave/LiftingState";
import Joke from "./Components/JokeGenOpgave/Joke";

export default function BasicExample() {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink activeClassName="selected" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/joke">
              Joke
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/liftingstate">
              Lifting State Example
            </NavLink>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/joke">
              <Joke className="joke" />
            </Route>
            <Route path="/liftingstate">
              <LiftingState />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}
