import Section from "../Section";
import ImageWithCaption from "../../Components/ImageWithCaption";

function Define({ title, userTypes }) {
  return (
    <Section title={title}>
      <div className="Ballst__define__list">
        {userTypes.map((userType, index) => (
          <div key={index} className="Ballst__define__list__item">
            <p className="Ballst__define__list__item--title">
              {userType.type} : {userType.description}
            </p>
            <ImageWithCaption
              className="Ballst__define__img"
              src={userType.imgSrc}
              alt={userType.imgAlt}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Define;
