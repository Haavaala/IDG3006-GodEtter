import "./filter.css";

function FilterButton({ filterText, key, toggleFilterFunc, id, activeStatus }) {
  const toggleFilter = (id) => {
    toggleFilterFunc(id);
  };

  return (
    <button
      className={`filterButton ${activeStatus ? "active" : ""}`}
      onClick={() => toggleFilter(id)}
      key={key}
    >
      <p className="filterText smallp">
        <i className="filterIcon">{activeStatus ? "-" : "+"}</i>
      </p>{" "}
      <p className="filterText smallp">{filterText}</p>
    </button>
  );
}

export default FilterButton;
