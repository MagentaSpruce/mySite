import React from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Hello from About page</h1>
      <Link to="/home" className="btn">
        Back to Lodge
      </Link>
    </div>
  );
};

export default About;
