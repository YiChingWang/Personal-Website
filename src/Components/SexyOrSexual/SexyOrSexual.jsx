import SexyORSexualpic from "../../assets/SexyOrSexual__pic.png";
import SexyORSexualcolor from "../../assets/SexyOrSexual__color.png";
import SexyORSexualcover from "../../assets/SexyOrSexual__cover.png";
import ImageWithCaption from "../../Components/ImageWithCaption";
import SkipLink from "../SkipLink/SkipLink";
import "./SexyOrSexual.css";

function SexyOrSexual() {
  return (
    <div className="sexyorsexual">
      <SkipLink />
      <div className="sexyorsexual__cover">
        <ImageWithCaption
          className="sexyorsexual__cover__img"
          src={SexyORSexualcover}
          alt="sexyorsexual cover"
        />
      </div>
      <div className="sexyorsexual__overview" id="main">
        <div className="sexyorsexual__intro">
          <p>Graphic Design - Individual Project - 2018 spring</p>
          <h2>A social concern poster design </h2>
          <p className="sexyorsexual__description">
            This design is based on the theme of women, focusing on the issue of
            sexual harassment, I through directly depicting the outline of a
            girl's body shows simple and direct beauty, and uses strong red for
            the main color, because red represents the meaning of warning, and I
            want to appeal to everyone to pay attention to this topic. Finally,
            I use the short sentence to embellish the poster, hoping to make
            everyone understand the meaning of sexual harassment.
          </p>
        </div>
      </div>
      <div className="sexyorsexual__pic">
        <ImageWithCaption
          className="sexyorsexual__img"
          src={SexyORSexualpic}
          alt="Color scheme"
        />
      </div>
      <div className="sexyorsexual__color">
        <ImageWithCaption
          className="sexyorsexual__color__img"
          src={SexyORSexualcolor}
          alt="sexyorsexual color scheme"
        />
      </div>
    </div>
  );
}
export default SexyOrSexual;
