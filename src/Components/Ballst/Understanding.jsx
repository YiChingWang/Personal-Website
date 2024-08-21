import Section from "../Section";
import ImageWithCaption from "../../Components/ImageWithCaption";
import List from "../../Components/List";

function Understanding({
  title,
  description,
  image,
  keyInsightTitle,
  insights,
  listClassName,
  itemClassName,
}) {
  return (
    <Section title={title}>
      <p className="Ballst__understandig__description">{description}</p>
      <ImageWithCaption
        className={image.className}
        src={image.src}
        alt={image.alt}
      />
      {keyInsightTitle && (
        <h4 className="Ballst__keyinsight--title">{keyInsightTitle}</h4>
      )}
      <List
        items={insights}
        listClassName={listClassName}
        itemClassName={itemClassName}
      />
    </Section>
  );
}

export default Understanding;
