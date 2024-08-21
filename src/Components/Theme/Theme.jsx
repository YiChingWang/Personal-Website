import sunIcon from "../../assets/Theme__light.png";
import moonIcon from "../../assets/Theme__night.png";
import "./Theme.css";

function Theme({ isDarkMode, toggleTheme }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleTheme();
    }
  };
  return (
    <div tabIndex={0} onKeyDown={handleKeyDown} onClick={toggleTheme}>
      {isDarkMode ? (
        <img className="themeIcon" src={sunIcon} alt="light mode" />
      ) : (
        <img className="themeIcon" src={moonIcon} alt="dark mode" />
      )}
    </div>
  );
}

export default Theme;
