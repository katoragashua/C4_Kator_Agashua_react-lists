import React from "react";
import devjobsLogo from "/logos/devjobs.svg"
import hamburger from "/logos/hamburger.svg"

const Header = () => {
  return (
    <header className="header">
      <div className="container header-container">
        <div className="logo">
            <img src={devjobsLogo} alt="" />
        </div>
        <nav className="nav">
            <img src={hamburger} alt="" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
