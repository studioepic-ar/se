import React from "react";
import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import SlideShow from "./components/Carousel/Carousel.component";
import Homepage from "./pages/Homepage/Homepage.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  );
}
// <Route path="/" component={DemoNav} />

export default App;
