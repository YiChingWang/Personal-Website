import Section from "../../Components/Section";

function ProblemsAndChallenge({ challenges }) {
  return (
    <Section title="Problems & Challenges">
      {challenges.map((challenge, index) => (
        <div key={index} className="Ballst__problemsChallenges__item">
          <h4 className="Ballst__problemsChallenges__item--title">
            {challenge.title}
          </h4>
          <p className="Ballst__problemsChallenges__item--content">
            {challenge.content}
          </p>
        </div>
      ))}
    </Section>
  );
}

export default ProblemsAndChallenge;
