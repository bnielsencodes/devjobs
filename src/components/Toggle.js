import React from "react";
import sunIcon from "../assets/desktop/icon-sun.svg";
import moonIcon from "../assets/desktop/icon-moon.svg";
import "../index.css";

export default function Toggle() {
  return (
    <div className="toggle-container">
      <img src={sunIcon} alt="sun icon" />
      <div className="toggle">
        <input
          id="toggle-switch"
          className="toggle-switch"
          type="checkbox"
        />
        <label aria-label="none"></label>
      </div>
      <img src={moonIcon} alt="moon icon" />
    </div>
  );
}
