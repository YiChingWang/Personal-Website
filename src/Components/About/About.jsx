import Button from "../Button/Button";
import SkipLink from "../SkipLink/SkipLink";
import Protrait from "../../assets/About__protrait.png";
import "./About.css";

function Home({ onContactClick }) {
  return (
    <div className="About">
      <SkipLink />
      <img className="About__img" src={Protrait} alt="My Protrait" />
      <div className="About__content" id="main">
        <h2 className="About__title">Hey, I am Ollie!</h2>
        <p className="About__text">
          Hi, I’m Yiching, but feel free to call me Ollie. As a UI/UX-focused
          Frontend Developer, I’m passionate about crafting seamless,
          user-centered digital experiences. I combine technical expertise with
          a strong eye for design to make everyday interactions intuitive,
          accessible, and enjoyable. Whether it’s translating design systems
          into pixel-perfect interfaces or optimizing usability, I aim to bridge
          the gap between design and development. Let’s build better, more
          thoughtful digital experiences together.
        </p>
        <div className="About__buttons">
          <Button onClick={onContactClick} className="About__button">
            Contact me !
          </Button>
          <a
            href="https://drive.google.com/file/d/1AaslyUjsaiVsroYBM4eB6PLLZbkafYyA/view?usp=sharing"
            className="About__cv__button"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
}
export default Home;
