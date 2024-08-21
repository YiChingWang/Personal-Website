import Section from "../Section";
import ImageWithCaption from "../../Components/ImageWithCaption";

function Ideation({ title, blocks, className }) {
  return (
    <Section title={title}>
      {blocks.map((block, index) => (
        <div className="Ballst__ideation__item" key={index}>
          <h4>{block.subTitle}</h4>
          <p className="Ballst__ideation__text">{block.description}</p>
          <ImageWithCaption
            className={className}
            src={block.imgSrc}
            alt={block.imgAlt}
          />
        </div>
      ))}
    </Section>
  );
}

export default Ideation;
