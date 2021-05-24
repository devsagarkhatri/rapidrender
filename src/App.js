import "./App.css";
import Navbar from "./navbar.jsx";
import Blob from "./blobs/blob.jsx";
import Gradients from "./gradients/gradients.jsx";
import Patterns from "./patterns/patterns.jsx";
import SVG from "./SVG/svg.jsx";
import Home from "./home/home.jsx";
import React from "react";
import { Route, Switch, Redirect, Router } from "react-router-dom";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route path="/Home" render={() => <Home />} />
        <Route path="/Blob" render={() => <Blob />} />
        <Route path="/Gradients" render={() => <Gradients />} />
        <Route path="/Patterns" render={() => <Patterns />} />
        <Route path="/SVG" render={() => <SVG />} />
        <Route path="/" exact render={() => <Home />} />
        <Redirect from="/" to="/Home" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
