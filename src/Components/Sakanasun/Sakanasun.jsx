import Sakanasuncover from "../../assets/Sakanasun__cover.png";
import Sakanasunbusinesscard from "../../assets/Sakanasun__businesscard.png";
import Sakanasunposter from "../../assets/Sakanasun__poster.png";
import Sakanasunpackage from "../../assets/Sakanasun__package.png";
import Sakanasunflyer from "../../assets/Sakanasun__flyer.png";
import Sakanasuncolor from "../../assets/Sakanasun__color.png";
import ImageWithCaption from "../../Components/ImageWithCaption";
import Section from "../Section";
import SkipLink from "../SkipLink/SkipLink";
import "./Sakanasun.css";

function Sakanasun() {
  return (
    <div className="sakanasun">
      <SkipLink />
      <div className="sakanasun__cover">
        <ImageWithCaption
          className="sakanasun__cover__img"
          src={Sakanasuncover}
          alt="Sakanasun cover"
        />
      </div>
      <div className="sakanasun__content" id="main">
        <div className="sakanasun__overview">
          <p>Graphic Design - Individual Project - 2018 Spring</p>
          <h2>A Supermarket Branding Design</h2>
          <p className="sakanasun__description">
            I took the Japanese supermarket as the theme, hoping to design a
            supermarket that is both cute and textured.
          </p>
        </div>
        <div className="sakanasun__businesscard">
          <Section
            className="sakanasun__businesscard__title"
            title="Business Card Design"
          >
            <p className="sakanasun__businesscard__description">
              The design of the business card is mainly to reproduce vegetables
              and fruits through a special arrangement, aiming to attract
              consumer attention. Additionally, the bright colors are intended
              to bring out the vibrancy of the supermarket to everyone.
            </p>
            <ImageWithCaption
              className="sakanasun__businesscard__img"
              src={Sakanasunbusinesscard}
              alt="Business card design"
            />
          </Section>
        </div>
        <div className="sakanasun__poster">
          <Section
            className="sakanasun__poster__title"
            title="Grand Opening Poster Design"
          >
            <ImageWithCaption
              className="sakanasun__poster__img"
              src={Sakanasunposter}
              alt="Grand opening poster design"
            />
          </Section>
        </div>
        <div className="sakanasun__package">
          <Section
            className="sakanasun__package__title"
            title="Food Package Design"
          >
            <p className="sakanasun__package__description">
              We printed encouraging words on the packaging, so that people who
              come to the supermarket to buy vegetables can feel joy when they
              see the messages.
            </p>
            <ImageWithCaption
              className="sakanasun__package__img"
              src={Sakanasunpackage}
              alt="Food package design"
            />
          </Section>
        </div>
        <div className="sakanasun__flyer">
          <Section
            className="sakanasun__flyer__title"
            title="Flyer Layout Design"
          >
            <p className="sakanasun__flyer__description">
              We use a simple and clear layout for the flyers, reimagined to get
              rid of the overwhelming look of dense catalogs from the past.
            </p>
            <ImageWithCaption
              className="sakanasun__flyer__img"
              src={Sakanasunflyer}
              alt="Flyer layout design"
            />
          </Section>
        </div>
        <div className="sakanasun__color">
          <ImageWithCaption
            className="sakanasun__color__img"
            src={Sakanasuncolor}
            alt="Color scheme"
          />
        </div>
      </div>
    </div>
  );
}

export default Sakanasun;
