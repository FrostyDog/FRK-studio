import React from "react";
import "./App.css";
import useStyles from "./theme/style";
import Bio from "./screens/Bio";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Works from "./screens/Works";
import StableInfo from "./components/MainControls";
import "./theme/styles.scss";

function App() {
  const themeStyle = useStyles();

  // make do somthing if needed
  function makeDown(Component) {
    return <Component name="Really New Name" />;
  }

  return (
    <div className="App">

      <Router>
        <StableInfo stance="works" themeStyle={themeStyle} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => {
                return <Redirect to="/bio" />;
              }}
            />
            <Route exact path="/bio" render={() => <Bio name="Bio" />} />
            <Route
              exact
              path="/works"
              render={() => <Works name="Works" />}
            />
          </Switch>
      </Router>
    </div>
  );
}

export default App;
