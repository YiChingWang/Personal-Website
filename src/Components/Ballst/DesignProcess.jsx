import Section from "../Section";
import ImageWithCaption from "../../Components/ImageWithCaption";

function DesignProcess({ imageUrl, className }) {
  return (
    <Section title="Design Process">
      <ImageWithCaption
        className={className}
        src={imageUrl}
        alt="Design process img"
      />
    </Section>
  );
}

export default DesignProcess;
