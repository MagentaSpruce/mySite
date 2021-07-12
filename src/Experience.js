import React, { useState } from "react";
import data from "./techSkills";
import { CgChevronDoubleRight } from "react-icons/cg";
import { GiOpenTreasureChest } from "react-icons/gi";

const Experience = () => {
  const [techData, setTechData] = useState(data);
  const [techField, setTechField] = useState(0);
  const { title, experience, stack, label } = techData[techField];
  return (
    <>
      <section className="section techExperience">
        <div className="title">
          <div className="underline underline-1"></div>
          <h2 className="tech-section-header">Experience</h2>
          <div className="underline"></div>
        </div>
        <div className="tech-center">
          <div className="btn-container">
            {techData.map((item, index) => {
              return (
                <button
                  key={item.id}
                  onClick={() => setTechField(index)}
                  className={`tech-btn ${index === techField && "active-btn"}`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
          {/*tech info*/}
          <article className="tech-info">
            <GiOpenTreasureChest className="treasure-chest" />
            <h3>{title}</h3>
            <h4>{label}</h4>
            <p className="tech-date">{experience}</p>
            {stack.map((item, index) => {
              return (
                <div key={index} className="tech-desc">
                  <CgChevronDoubleRight className="tech-icon" />
                  <p>{item}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
};

export default Experience;
