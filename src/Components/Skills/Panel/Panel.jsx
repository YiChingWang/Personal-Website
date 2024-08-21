import "../Panel/Panel.css";

function Panel({ imageUrl, alt, text }) {
  return (
    <div className="panel">
      <img src={imageUrl} alt={alt} className="panel__img" />
      <p className="panel__text">{text}</p>
    </div>
  );
}
export default Panel;
