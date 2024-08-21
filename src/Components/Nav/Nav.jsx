import { useState } from "react";
import menu from "./menu.js";
import hamburgerIcon from "../../assets/Nav__icon__hamburger--light.png";
import hamburgerDarkIcon from "../../assets/Nav__icon__hamburger--dark.png";
import closeMenuIcon from "../../assets/Nav__icon__close--light.png";
import closeMenuDarkIcon from "../../assets/Nav__icon__close--dark.png";
import "./Nav.css";

function Nav({ setPage, className, isDarkMode }) {
  function changePage(e) {
    e.preventDefault();
    window.history.pushState(null, "", e.target.pathname);
    setPage(e.target.pathname);
    setShowMenu(false);
  }
  const [showMenu, setShowMenu] = useState(false);
  const list = menu.map((item) => {
    return (
      <li className="global-nav__item" key={item.name}>
        <a className="global-nav__link" href={item.path} onClick={changePage}>
          {item.name}
        </a>
      </li>
    );
  });
  const toggleClass = showMenu ? "" : "global-nav__list--hidden";
  return (
    <nav className={`global-nav ${className}`}>
      <button
        className="global-nav__toggle"
        onClick={() => setShowMenu(!showMenu)}
        aria-expanded={showMenu ? "true" : "false"}
      >
        {showMenu ? (
          <img
            className="global-nav__toggle-icon"
            src={isDarkMode ? closeMenuDarkIcon : closeMenuIcon}
            alt="Close Menu"
          />
        ) : (
          <img
            className="global-nav__toggle-icon"
            src={isDarkMode ? hamburgerDarkIcon : hamburgerIcon}
            alt="Open Menu"
          />
        )}
      </button>
      <ul className={`global-nav__list ${toggleClass}`}>{list}</ul>
    </nav>
  );
}

export default Nav;
