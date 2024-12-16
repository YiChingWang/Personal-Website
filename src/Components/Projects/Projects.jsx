import { useState } from "react";
import cardlist from "./Card/CardList.js";
import Card from "./Card/Card.jsx";
import Button from "../Button/Button.jsx";
import Link from "../Link/Link.jsx";
import Filter from "../../Components/Projects/Filter/Filter.jsx";
import SkipLink from "../SkipLink/SkipLink.jsx";
import "./Card/Card.css";
import "./projects.css";

function Project({ setPage }) {
  const [selectedCategory, setSelectedCategory] = useState("All Category");
  const categories = [
    "All Category",
    "Full Stack",
    "Front-end Development",
    "User Research",
    // "Machine Learning",
    // "Graphic Design",
  ];
  const filteredCardList =
    selectedCategory === "All Category"
      ? cardlist
      : cardlist.filter((card) => card.category === selectedCategory);

  function changePage(pathname) {
    if (pathname) {
      window.history.pushState(null, "", pathname);
      setPage(pathname);
    }
  }

  return (
    <>
      <SkipLink />
      <h1 className="projects__title">See all of my works!</h1>
      <Filter
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
      />
      <main id="main" className="cards">
        {filteredCardList.map((data) => (
          <Card key={data.id} className="card">
            <img className="card__pic" alt={data.alt} src={data.imageUrl} />
            <div className="card__content">
              <p className="card__category">{data.category}</p>
              <h3 className="card__title">{data.title}</h3>
              <p className="card__text">{data.text}</p>
              {data.visual === "link" ? (
                <Link href={data.pathname} className="card__Link">
                  {data.buttonText}
                </Link>
              ) : (
                <Button
                  className="card__button"
                  visual={data.visual}
                  onClick={() => changePage(data.pathname)}
                >
                  {data.buttonText}
                </Button>
              )}
            </div>
          </Card>
        ))}
      </main>
    </>
  );
}

export default Project;
