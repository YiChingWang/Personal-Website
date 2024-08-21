function Role({ details }) {
  return (
    <div className="Ballst__role__list">
      {details.map((detail, index) => (
        <div key={index} className="Ballst__role__item">
          <strong>{detail.label}</strong> {detail.content}
        </div>
      ))}
    </div>
  );
}

export default Role;
