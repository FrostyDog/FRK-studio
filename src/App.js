import React from "react";
import "./App.css";
import Bio from "./screens/Bio";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import Works from "./screens/Works";
import { useState } from "react";
import StableInfo from "./components/MainControls";
import "./theme/styles.scss";

function App() {
 
  let initialNavigation = () => {
    let x = window.location.href.split('/')
    if(x.[x.length-1] === "") {
      return "works"
    }
    return(x.[x.length-1])
  }





  // navigation function
  let setNewStance = (newStance) => {
    changeStance(newStance);
  };
  let [stance, changeStance] = useState(initialNavigation());

  return (
    <div className="App">
      <Router>
        <StableInfo stance={stance} changeStance={setNewStance} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return <Redirect to="/works" />;
            }}
          />
          <Route exact path="/bio" render={() => <Bio name="Bio" />} />
          <Route exact path="/works" render={() => <Works name="Works" />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
