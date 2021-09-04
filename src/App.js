import React from "react";
import { Switch, Route } from "react-router-dom";
// import { Switch, Route, Link } from "react-router-dom";

import "./App.css";
import AboutPage from "./pages/AboutPage/AboutPage.component";
import CareersPage from "./pages/CareersPage/CareersPage.component";
import ContactPage from "./pages/ContactPage/ContactPage.component";
import GalleryPage from "./pages/GalleryPage/GalleryPage.component";
import Homepage from "./pages/Homepage/Homepage.component";
import ProjectPage from "./pages/ProjectsPage/Project.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/gallery" component={GalleryPage} />
        <Route exact path="/careers" component={CareersPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Switch>
    </div>
  );
}
// <Route path="/" component={DemoNav} />

export default App;
