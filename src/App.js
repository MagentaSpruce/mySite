import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Modal from "./Modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Sidebar />
        <Switch>
          <Route exact path="/home">
            <Home />
            <Sidebar />
            <Modal />
          </Route>
          <Route path="/about">
            <About />
            <Sidebar />
          </Route>
          <Route path="/contact">
            <Contact />
            <Sidebar />
          </Route>
          <Route path="*">
            <Error></Error>
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
