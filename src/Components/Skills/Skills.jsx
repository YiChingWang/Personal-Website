import panels from "../Skills/Panel/PanelList.js";
import Panel from "../Skills/Panel/Panel.jsx";
import SkipLink from "../SkipLink/SkipLink.jsx";
import "./Skills.css";

function Skills() {
  return (
    <div>
      <SkipLink />
      <h1 className="skills__title">My Skills</h1>
      <div className="panels" id="main">
        {panels.map((card) => (
          <Panel
            key={card.id}
            imageUrl={card.imageUrl}
            alt={card.alt}
            text={card.text}
          />
        ))}
      </div>
    </div>
  );
}
export default Skills;
