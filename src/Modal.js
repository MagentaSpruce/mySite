import React, { useState } from "react";
import { useGlobalContext } from "./Context";
import profilePic from "./iconImage.png";
import bubble from "./bubble.png";

const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext();
  const [value, setValue] = useState("❌");
  const [photo, setPhoto] = useState(profilePic);
  const [header1, setHeader1] = useState("Hi! 👋");
  const [header2, setHeader2] = useState("I'm Sprucey.");

  const [modalBodyText, setModalBodyText] = useState(
    "Thanks for visiting my little site, I do hope you like it! I myself am a full-stack Javascript based web developer who is always learning new magic ✨ Let's get whimsical❣"
  );
  const click = () => {
    if (value === "❌") {
      setValue("👀");
      setHeader1("");
      setHeader2("Whoopsies!");
      setModalBodyText(
        "I thought I fixed that bug 🐛... No worries friend, all's well that ends well. Try it again and enjoy your look around!"
      );
    } else if (value === "👀") {
      setValue("😅");
      setHeader1("");
      setHeader2("Er herm..");
      setModalBodyText(
        "Sorry about this. Would you mind not mentioning it to my boss? We're all friends here right? It should definitely be working now though."
      );
    } else if (value === "😅") {
      setValue("😒");
      setHeader1("");
      setHeader2("You broke it.");
      setPhoto("");
      setModalBodyText(
        "Nice going a? If I could just have another moment please.. I'm working fervently behind the scenes to connect all of the square pegs into the round holes 🛵"
      );
    } else if (value === "😒") {
      setValue("✅");
      setHeader1("");
      setHeader2("Fixed it 😎");
      setModalBodyText(
        "What? You thought I didn't know what I was doing or something? 😉. Enjoy your look around!"
      );
      setPhoto(profilePic);
    } else if (value === "✅") {
      closeModal(true);
      setTimeout(() => {
        setValue("❌");
        setHeader1("Hi! 👋");
        setHeader2("I'm Sprucey");
        setModalBodyText(
          "Thanks for visiting my little site. I do hope you like it! I'm a full-stack Javascript based web developer who is always learning new magic. Let's get whimsical❣"
        );
      }, 500);
    } else {
      closeModal(true);
    }
  };
  return (
    <>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div className="modal-container">
          <img src={photo} alt="Sprucey Baby" className="sprucey" />

          <button value={value} className="close-modal-btn" onClick={click}>
            {value}
          </button>
          <div className="modal-textbox">
            <h2 className="modal-heading">
              {header1} <br />
            </h2>
            <h2 className="modal-heading">{header2}</h2>
            <p className="modal-bio">{modalBodyText}</p>
          </div>
          <div className="bubbles">
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
            <img src={bubble} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
