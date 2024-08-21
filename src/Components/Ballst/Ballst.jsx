import {
  introData,
  roleData,
  designProcessData,
  challengesData,
  understandingData,
  researchData,
  designGoalsData,
  defineData,
  ideationData,
  hifiDesignData,
  nextStepsData,
  reflectionsData,
} from "./BallstData";
import Intro from "../Ballst/Intro";
import Role from "../Ballst/Role";
import DesignProcess from "../Ballst/DesignProcess";
import ProblemsAndChallenge from "../Ballst/ProblemAndChallenge";
import Understanding from "../Ballst/Understanding";
import Research from "../Ballst/Research";
import DesignGoal from "../Ballst/DesignGoal";
import Define from "../Ballst/Define";
import Ideation from "../Ballst/Ideation";
import HifiDesign from "../Ballst/Hifidesign";
import Nextstep from "../Ballst/Nextstep";
import Reflection from "../Ballst/Reflection";
import SkipLink from "../SkipLink/SkipLink";
import ballstcover from "../../assets/Ballst__cover.png";
import "./Ballst.css";

function Ballst() {
  return (
    <div className="Ballst">
      <SkipLink />
      <img className="Ballst__cover" src={ballstcover} alt="Ballst__cover" />
      <div className="Ballst__overview" id="main">
        <p className="Ballst__category">User Research</p>
        <Intro title={introData.title} description={introData.description} />
        <Role details={roleData.details} />
      </div>
      <div className="Ballst__content">
        <div className="Ballst__designprocess">
          <DesignProcess
            imageUrl={designProcessData.imageUrl}
            className={designProcessData.className}
          />
        </div>
        <div className="Ballst__problemschallenges">
          <ProblemsAndChallenge challenges={challengesData} />
        </div>
        <div className="Ballst__understanding">
          <Understanding
            title={understandingData.title}
            description={understandingData.description}
            image={understandingData.image}
            keyInsightTitle={understandingData.keyInsightTitle}
            insights={understandingData.insights}
            listClassName={understandingData.listClassName}
            itemClassName={understandingData.itemClassName}
          />
        </div>
        <div className="Ballst__research">
          <Research
            interviewContent={researchData.interview.content}
            interviewImageSrc={researchData.interview.imageSrc}
            interviewImageAlt={researchData.interview.imageAlt}
            interviewImageClassName={researchData.interview.imageClassName}
            interviewResults={researchData.interview.results}
            dataAnalysisContent={researchData.dataAnalysis.content}
            dataAnalysisImageSrc={researchData.dataAnalysis.imageSrc}
            dataAnalysisImageAlt={researchData.dataAnalysis.imageAlt}
            dataAnalysisImageClassName={
              researchData.dataAnalysis.imageClassName
            }
            dataResults={researchData.results}
          />
        </div>
        <div className="Ballst__designgoal">
          <DesignGoal
            title={designGoalsData.title}
            description={designGoalsData.description}
            goals={designGoalsData.goals}
          />
        </div>
        <div className="Ballst__define">
          <Define title="Define" userTypes={defineData} />
        </div>
        <div className="Ballst__ideation">
          <Ideation
            title="Ideation"
            blocks={ideationData}
            className="Ballst__ideation__img"
          />
        </div>
        <div className="Ballst__hifidesign">
          <HifiDesign
            title={hifiDesignData.title}
            subTitle={hifiDesignData.subTitle}
            description={hifiDesignData.description}
            images={hifiDesignData.images}
          />
        </div>
        <div className="Ballst__nextstep">
          <Nextstep title={nextStepsData.title} steps={nextStepsData.steps} />
        </div>
        <div className="Ballst__reflection">
          <Reflection
            title={reflectionsData.title}
            reflections={reflectionsData.reflections}
          />
        </div>
      </div>
    </div>
  );
}
export default Ballst;
