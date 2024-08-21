import Section from "../../Components/Section";

function Reflection({ title, reflections }) {
  return (
    <Section title={title}>
      <div className="Ballst__reflection__list">
        {reflections.map((reflection, index) => (
          <div key={index} className="Ballst__reflection__item">
            <h4 className="Ballst__reflection__item--title">
              {reflection.title}
            </h4>
            <p className="Ballst__reflection__item--content">
              {reflection.content}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Reflection;
