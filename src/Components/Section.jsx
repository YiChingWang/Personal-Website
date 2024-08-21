function Section({ title, children, className }) {
  return (
    <>
      <h2 className={className}>{title}</h2>
      {children}
    </>
  );
}
export default Section;
