import React from "react";

const Header = () => {
  return (
    <>
      <header className="flex flex-row justify-between items-center px-4 py-3">
        <div className="header-left flex flex-row">
          <a></a>
          <span>Metal Bands</span>
        </div>
        <nav className="header-nav " aria-label="Main navigation">
          <ul className="nav-list flex flex-row gap-4">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
