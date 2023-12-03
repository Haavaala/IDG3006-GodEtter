import "./filter.css";
import FilterButton from "./FilterButton";

function Filter({ categories }) {
  // Hente kategori fra database
  if (!categories) return null;

  return (
    <div className="filter-container">
      {categories.map((category, index) => (
        <FilterButton key={index} filterText={category.name} />
      ))}
    </div>
  );
}

export default Filter;