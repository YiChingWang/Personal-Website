import "./Contactinfo.css";

function Contactinfo({ icon, name, content }) {
  return (
    <div className="contact__info__item">
      <img src={icon} alt={`${name} icon`} className="contact__info__icon" />
      <div className="contact__info__font">
        <p className="contact__info__name">{name}</p>
        <p className="contact__info__content">{content}</p>
      </div>
    </div>
  );
}

export default Contactinfo;
