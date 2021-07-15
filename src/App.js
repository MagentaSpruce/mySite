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
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <main>
        <Link to="/">Home</Link> <Link to={{ pathname: "/about" }}>About</Link>{" "}
        <Link to="/contact">Contact</Link>
        <Switch>
          <Route exact path="/" component={Home}>
            <Home />
            <Sidebar />
            <Modal />
            <Card />
            <Experience />
            <Extras />
            <Footer />
          </Route>
          <Route path="/about" component={About}>
            <About />
            <Sidebar />
            <AboutBio />
            <AboutPhoto />
            <Footer className="about-footer" />
          </Route>
          <Route path="/contact" component={Contact}>
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
