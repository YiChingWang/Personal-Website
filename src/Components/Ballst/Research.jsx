import ImageWithCaption from "../../Components/ImageWithCaption";
import Section from "../Section";

function Research({
  interviewContent,
  interviewImageSrc,
  interviewImageAlt,
  dataAnalysisContent,
  dataAnalysisImageSrc,
  dataAnalysisImageAlt,
  interviewResults,
  dataResults,
  interviewImageClassName,
  dataAnalysisImageClassName,
}) {
  return (
    <>
      <Section title="Research">
        <h4>Interview</h4>
        <p className="Ballst__interview__content">{interviewContent}</p>
        <ImageWithCaption
          className={interviewImageClassName}
          src={interviewImageSrc}
          alt={interviewImageAlt}
        />
        <div className="Ballst__interview__results">
          <h4>Result</h4>
          {interviewResults &&
            interviewResults.map((result, index) => (
              <div
                key={`interview-result-${index}`}
                className="Ballst__interview__results__item"
              >
                <h4 className="Ballst__interview__results__item--title">
                  {result.title}
                </h4>
                <p className="Ballst__interview__results__item--content">
                  {result.content}
                </p>
              </div>
            ))}
        </div>

        <h4>Data Analysis from beta-users</h4>
        <p className="Ballst__data__content">{dataAnalysisContent}</p>
        <ImageWithCaption
          className={dataAnalysisImageClassName}
          src={dataAnalysisImageSrc}
          alt={dataAnalysisImageAlt}
        />
        <div className="Ballst__data__results">
          <h4>Result</h4>
          {dataResults &&
            dataResults.map((result, index) => (
              <div
                key={`overall-result-${index}`}
                className="Ballst__data__results__item"
              >
                <h4 className="Ballst__data__results__item--title">
                  {result.title}
                </h4>
                <p className="Ballst__data__results__item--content">
                  {result.content}
                </p>
              </div>
            ))}
        </div>
      </Section>
    </>
  );
}

export default Research;
