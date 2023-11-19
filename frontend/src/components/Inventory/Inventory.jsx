import { useState, useEffect } from "react";
import './inventory.css';
import InventoryCategory from '../InventoryCategory/InventoryCategory';
import '../Filter/filter.css'
import FilterButton from '../Filter/FilterButton'

export default function Inventory({data, categories, search}) {

    if (!categories && !data) return null; // Sjekker om category og data ikke eksisterer, hvis saa - ikkje gjoer naake.

    const [toggledCategories, setToggledCategories] = useState([]);
  //   const [searchInput, setSearchInput] = useState("");

  //   const searchedData = data.filter((item) =>
  //   item.name.toLowerCase().includes(searchInput.toLowerCase())
  // );

    useEffect(() => {


      if (categories && categories.length > 0) {
        setToggledCategories(
          categories.map((category) => ({
            category_id: category.category_id,
            active: data.some((item) => item.category_id === category.category_id),
            name: category.name
          }))
        );
      }
    }, [categories]);

      // Define a custom sorting function
    const sortUncategorizedLast = (a, b) => {
      if (a.category_id === 1) return 1; // "uncategorized" category goes last
      if (b.category_id === 1) return -1;
      return a.active && !b.active ? -1 : b.active && !a.active ? 1 : 0;
    };

    // Sort categories using the custom sort function
    const sortedUncategorizedLast = toggledCategories.sort(sortUncategorizedLast);


      const toggleFilter = (category_id) => {
        setToggledCategories((prevCategories) =>
          prevCategories.map((cat) =>
            cat.category_id === category_id ? { ...cat, active: !cat.active } : cat
          )
        );
      };
  

      const filterData = (category) => {
        const filteredArray = data.filter((item) => item.category_id === category.category_id);
        if (category.active) {
          return <InventoryCategory key={category.category_id} category={category.name} data={filteredArray} />;
        }
    
        return null;
      };
  
    useEffect(() => {
    }, [toggledCategories]);

    const sortedCategories = [...sortedUncategorizedLast].sort((a, b) => (b.active ? 1 : -1));

  
    return (
        <>
        {/* <div className='filter-container'>
          {categories.map((category, index) => (
            <FilterButton key={index} filterText={category.name} id={category.category_id} activeStatus={category.active} toggleFilterFunc={toggleFilter}
            />
          ))}
        </div> */}
        <div className='filter-container'>
          {sortedCategories.map((category, index) => (
            <FilterButton key={index} filterText={category.name} id={category.category_id} activeStatus={category.active} toggleFilterFunc={toggleFilter}
            />
          ))}
        </div>
                
        {sortedCategories.map((category) => {
        if (category.active) {
            return filterData(category);
        }
        return null;
        })}
        
       {// <InventoryCategory category={categories[0].name} category_id={categories[0].category_id} />
       }
        </>
    )
}
