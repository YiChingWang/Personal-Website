function List({ items, listClassName, itemClassName }) {
  return (
    <ul className={listClassName}>
      {items.map((item, index) => (
        <li key={index} className={itemClassName}>
          {item}
        </li>
      ))}
    </ul>
  );
}
export default List;
