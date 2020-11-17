import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import OurClasses from "./Component/OurClasses/OurClasses";
import Pricing from "./Component/Pricing/Pricing";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/ourClasses">
          <OurClasses />
        </Route>
        <Route path="/pricing">
          <Pricing />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
