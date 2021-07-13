import React, { useState, useEffect } from "react";
import people from "./ExtrasData";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { RiGithubLine } from "react-icons/ri";
import forkify from "./forkifyIcon.png";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, project, image, text, label1, label2 } = people[index];

  const checkNumber = (number) => {
    if (number > people.length - 1) {
      return 0;
    }
    if (number < 0) {
      return people.length - 1;
    }
    return number;
  };

  const nextPerson = () => {
    setIndex((index) => {
      let newIndex = index + 1;

      return checkNumber(newIndex);
    });
  };
  const prevPerson = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  //   useEffect(() => {
  //     let slider = setInterval(() => {
  //       setIndex(index + 1);
  //     }, 3000);
  //     return () => clearInterval(slider);
  //   }, [index]);
  return (
    <>
      <div className="underline works-underline-1"></div>
      <h2 className="works-header">Additional Works</h2>
      <div className="underline"></div>
      <article className="works">
        <div className="img-container">
          <img src={image} alt={name} className="project-img" />
          <span className="fan-icon">
            <a href={label2}>
              {" "}
              <RiGithubLine className="fan" />
            </a>
          </span>
        </div>
        <h4 className="name">{name}</h4>
        <p className="project">{project}</p>
        <p className="info">{text}</p>
        <div className="button-container">
          <button className="prev-btn" onClick={prevPerson}>
            <FaChevronLeft />
          </button>
          <button className="next-btn" onClick={nextPerson}>
            <FaChevronRight />
          </button>
        </div>
        <button className="random-btn" onClick={randomPerson}>
          Mix it up!
        </button>
      </article>
    </>
  );
};

export default Review;
