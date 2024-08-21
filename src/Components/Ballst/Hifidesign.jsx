import Section from "../Section";
import ImageWithCaption from "../../Components/ImageWithCaption";

function Hifidesign({ title, subTitle, description, images, className }) {
  return (
    <Section title={title}>
      <h4>{subTitle}</h4>
      <p className="Ballst__hifidesign__description">{description}</p>
      {images.map((image, index) => (
        <ImageWithCaption
          className={image.className}
          key={index}
          src={image.src}
          alt={image.alt}
        />
      ))}
    </Section>
  );
}

export default Hifidesign;
