import Section from "../../Components/Section";

function Nextstep({ title, steps }) {
  return (
    <Section title={title}>
      <div className="Ballst__nextstep__list">
        {steps.map((step, index) => (
          <div key={index} className="Ballst__nextstep__item">
            <h4 className="Ballst__nextstep__item--title">{step.title}</h4>
            <p className="Ballst__nextstep__item--content">{step.content}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

export default Nextstep;
