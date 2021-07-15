import React from "react";
import Sidebar from "./Sidebar";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Error from "./Error";
import Modal from "./Modal";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./Card";
import Experience from "./Experience";
import Extras from "./Extras";
import Footer from "./Footer";
import AboutBio from "./AboutBio";
import AboutPhoto from "./AboutPhoto";

function App() {
  return (
    <Router>
      <main>
        {/* <Link className="page-links" to="/">
          Home
        </Link>{" "}
        <Link className="page-links" to={{ pathname: "/about" }}>
          About
        </Link>{" "}
        <Link className="page-links" to="/contact">
          Contact
        </Link> */}
        <Switch>
          <Route exact path="/">
            <Home />
            <Sidebar />
            <Modal />
            <Card />
            <Experience />
            <Extras />
            <Footer />
          </Route>
          <Route path="/about">
            <About />
            <Sidebar />
            <AboutBio />
            <AboutPhoto />
            <Footer className="about-footer" />
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
