import React from "react";
import logo from "../assets/desktop/logo.svg";
import Toggle from "./Toggle";

export default function Header() {
  return (
    <section className="header">
      <div className="header__inner">
        <img src={logo} alt="devjobs logo" />
        <Toggle />
      </div>
    </section>
  );
}
