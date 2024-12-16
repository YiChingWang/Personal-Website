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
          I’m Yiching, but feel free to call me Ollie. As a Full-Stack
          Developer, I’m all about using code to solve problems and improve
          lives. I blend technical skills with a touch of creativity to make
          everyday digital interactions more enjoyable. Striving to enhance the
          world one line of code at a time, I’m here to create solutions that
          bring us all forward. Let's make life better together.
        </p>
        <div className="About__buttons">
          <Button onClick={onContactClick} className="About__button">
            Contact me !
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Home;
