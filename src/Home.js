import React, { Component } from "react";
// import Particles from "react-particles-js";
import {
  GiYinYang,
  GiAlliedStar,
  GiHoodedFigure,
  GiBarracks,
} from "react-icons/gi";
import { FaFighterJet } from "react-icons/fa";
import { useGlobalContext } from "./Context";
import Particle from "./Particle";
import Projects from "./Projects";

const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <>
      <main className="home-main">
        <Particle />
        <button className="sidebar-toggle" onClick={openSidebar}>
          <GiYinYang />
        </button>

        <div className="home-header-top">
          <h1>Magenta</h1>
        </div>
        <button className="btn" onClick={openModal}>
          <h2 className="modal-welcome">Welcome!</h2>
          <h3 className="fighter-jet">
            <FaFighterJet className="fighter-jet" />
          </h3>
          <GiBarracks className="barracks" />
          <p className="modal-open-text">please click here</p>
        </button>
        <div className="home-header-bottom">
          <h1>Spruce</h1>
        </div>
        <section className="projects-container">
          <Projects />
        </section>
      </main>
    </>
  );
};

export default Home;
