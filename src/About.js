import React from "react";
import { GiYinYang } from "react-icons/gi";
import { ImArrowDown } from "react-icons/im";

import { useGlobalContext } from "./Context";

const About = () => {
  const { openSidebar, openModal } = useGlobalContext();
  return (
    <main className="About">
      <button className="sidebar-toggle" onClick={openSidebar}>
        <GiYinYang />
      </button>
      <p className="glitch">
        <span aria-hidden="true">Who Am I?</span>
        <span aria-hidden="true">Who Am I?</span>
        Who Am I?
      </p>
      <ImArrowDown className="about-arrow" />
    </main>
  );
};

export default About;
