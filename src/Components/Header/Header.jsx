import { useState, useEffect } from "react";
import Nav from "../Nav/Nav";
import Home from "../About/About";
import Skills from "../Skills/Skills";
import Button from "../Button/Button";
import Theme from "../Theme/Theme";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Ballst from "../Ballst/Ballst";
import Sakanasun from "../Sakanasun/Sakanasun";
import SexyOrSexual from "../SexyOrSexual/SexyOrSexual";
import "./Header.css";

function Header() {
  const [page, setPage] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (
      navigator.userAgent.includes("Safari") &&
      !navigator.userAgent.includes("Chrome")
    ) {
      document.documentElement.classList.add("safari");
    }

    if (navigator.userAgent.includes("LinkedIn")) {
      document.documentElement.classList.add("linkedin-browser");
    }
  }, []);

  useEffect(() => {
    function handlePageLoad() {
      setPage(document.location.pathname);
    }
    handlePageLoad();
    console.log("adding listener");
    window.addEventListener("popstate", handlePageLoad);

    return () => {
      window.removeEventListener("popstate", handlePageLoad);
    };
  });

  function handleNavigation(path) {
    window.history.pushState({}, "", path);
    setPage(path);
  }

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <div className="header__container">
        <header className="header">
          <Button
            className="header__title"
            onClick={() => handleNavigation("/")}
          >
            Yi Ching Wang
          </Button>
        </header>
        <Nav
          className="header__nav"
          setPage={setPage}
          isDarkMode={isDarkMode}
        />
        <div className="header__theme">
          <Theme isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        </div>
      </div>
      {page === "/" && (
        <Home onContactClick={() => handleNavigation("/Contact")} />
      )}
      {page === "/Projects" && <Projects setPage={setPage} />}
      {page === "/Skills" && <Skills />}
      {page === "/Contact" && <Contact isDarkMode={isDarkMode} />}
      {page === "/Ballst" && <Ballst />}
      {page === "/Sakanasun" && <Sakanasun />}
      {page === "/SexOrSexual" && <SexyOrSexual />}
    </>
  );
}
export default Header;
