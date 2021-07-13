import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <>
      <main>
        <div className="pw-container">
          <h1>Password Generator 🗝</h1>
          <div className="pw-header">
            <div className="pw" id="pw"></div>
            <button className="copy" id="copy">
              Copy to clipboard
            </button>
          </div>
          <div className="pw-body">
            <div className="htmlForm-control">
              <label htmlFor="length">
                &nbsp;&nbsp;&nbsp;&nbsp;Password Length
              </label>
              <input id="length" type="number" value="15" min="6" max="17" />
            </div>
          </div>
          <div className="pw-body">
            <div className="htmlForm-control">
              <label htmlFor="upper">Contain Uppercase Letters</label>
              <input className="check" id="upper" type="checkbox" />
            </div>
          </div>
          <div className="pw-body">
            <div className="htmlForm-control">
              <label htmlFor="lower">Contain Lowercase Letters</label>
              <input className="check" id="lower" type="checkbox" />
            </div>
          </div>
          <div className="pw-body">
            <div className="htmlForm-control">
              <label htmlFor="number">Contain Numbers</label>
              <input className="check" id="number" type="checkbox" />
            </div>
          </div>
          <div className="pw-body">
            <div className="htmlForm-control">
              <label htmlFor="symbol">Contain Symbols</label>
              <input className="check" id="symbol" type="checkbox" />
            </div>
            <button id="generate" className="generate">
              Create Password
            </button>
          </div>
        </div>
      </main>
    </>

    // {/* <Link to="/" classNameName="btn">
    //   Back to Lodge
    // </Link> */}
  );
};

export default Contact;
