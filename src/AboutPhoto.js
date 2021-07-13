import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import me from "./me.jpg";

const AboutPhoto = () => {
  return (
    <>
      <div className="about-image-div">
        <div>
          <img className="about-img" src={me} alt="" />
        </div>
        <div className="img-icons-container">
          <AiFillGithub className="about-icons" />
          <AiFillLinkedin className="about-icons" />
        </div>
      </div>
    </>
  );
};

export default AboutPhoto;
