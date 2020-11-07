import React from "react";
import "./style2.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  useParams,
  useRouteMatch,
} from "react-router-dom";

export default function NestingExample({ info }) {
  return (
    <Router>
      <div>
        <ul className="header">
          <li>
            <NavLink exact activeClassName="selected" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="selected" to="/topics">
              Topics
            </NavLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/topics">
            <Topics info={info} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Topics({ info }) {
  console.log(info);

  // The `path` lets us build <Route> paths that are
  // relative to the parent route, while the `url` lets
  // us build relative links.
  // useRouteMatch giver den given URL man er på
  let { path, url } = useRouteMatch();

  const listItems = info.map((t) => (
    <li key={t.id}>
      <Link to={`${url}/${t.id}`}>{t.title}</Link>
    </li>
  ));

  return (
    <div>
      <h2>Topics</h2>
      <ul>{listItems}</ul>
      <p>{listItems.length}</p>
      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:topicId`}>
          <Topic />
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  // The <Route> that rendered this component has a
  // path of `/topics/:topicId`. The `:topicId` portion
  // of the URL indicates a placeholder that we can
  // get from `useParams()`.
  let { topicId } = useParams();

  return (
    <div>
      <h3>{topicId}</h3>
    </div>
  );
}
