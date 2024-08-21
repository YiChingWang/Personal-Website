function Link({ children, href, className }) {
  function handleClick(e) {
    e.preventDefault();
    window.open(href);
  }
  return (
    <a href={href} className={className} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
