import Button from "../../Button/Button";
import "../../Projects/Filter/Filter.css";

function Filter({ selectedCategory, onCategoryChange, categories }) {
  return (
    <>
      <div className="filter__selector">
        {categories.map((category) => (
          <Button
            key={category}
            className="filter__button"
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Button>
        ))}
      </div>
      <div className="filter__mobile__dropdown">
        <select
          className="filter__mobile__dropdown__item"
          onChange={(e) => onCategoryChange(e.target.value)}
          value={selectedCategory}
        >
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
export default Filter;
