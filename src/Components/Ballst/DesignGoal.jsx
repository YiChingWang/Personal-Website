import Section from "../../Components/Section";
import List from "../../Components/List";

function DesignGoal({ title, description, goals }) {
  return (
    <Section title={title}>
      <p className="Ballst__designgoal__description">{description}</p>
      <div className="Ballst__designgoal__list">
        {goals.map((goal, index) => (
          <div key={index} className="Ballst__designgoal__list__item">
            <h4 className="Ballst__designgoal__list__item--title">
              {goal.title}
            </h4>
            <p className="Ballst__designgoal__list__item--subtitle">
              {goal.description}
            </p>
            <List
              items={goal.functions}
              listClassName="Ballst__designgoal__list__item--sublist"
              itemClassName="Ballst__designgoal__list__item--sublist--item"
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

export default DesignGoal;
