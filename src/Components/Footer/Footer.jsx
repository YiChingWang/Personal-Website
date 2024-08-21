import footer from "./FooterMenu";
import Link from "../Link/Link";
import "./Footer.css";

function Footer() {
  const list = footer.map((item) => {
    return (
      <li className="footer__item" key={item.name}>
        <Link href={item.href} className="footer__link">
          {item.name}
        </Link>
      </li>
    );
  });

  return (
    <footer className="footer">
      <p className="footer__text">2024@Yi Ching Wang. All Rights Reserved.</p>
      <ul className="footer__list">{list}</ul>
    </footer>
  );
}

export default Footer;
