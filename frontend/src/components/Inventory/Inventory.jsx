import { useState, useEffect } from "react";
import './inventory.css';
import InventoryCategory from '../InventoryCategory/InventoryCategory';
import '../Filter/filter.css'
import FilterButton from '../Filter/FilterButton'


export default function Inventory({data, categories, retrieveData}) {


    if (!categories && !data) return null; // Sjekker om category og data ikke eksisterer, hvis saa - ikkje gjoer naake.

    console.log("categories2",categories)
    const [toggledCategories, setToggledCategories] = useState([]);



    useEffect(() => {


      if (categories && categories.length > 0 && data && data.length > 0) {
        setToggledCategories(
          categories.map((category) => ({
            category_id: category.category_id,
            active: data.some((item) => item.category_id === category.category_id),
            name: category.name
          }))
        );
      }
    }, [categories]);


      const toggleFilter = (category_id) => {
        setToggledCategories((prevCategories) =>
          prevCategories.map((cat) =>
            cat.category_id === category_id ? { ...cat, active: !cat.active } : cat
          )
        );
      };

      const sortedCategories = [...toggledCategories].sort((a, b) => {
        if (a.active === b.active) {
          return a.name.localeCompare(b.name);
        }
        return b.active ? 1 : -1;
      });

      const filterData = (category) => {
        const filteredArray = data.filter((item) => item.category_id === category.category_id);
        if (category.active) {
          return <InventoryCategory key={category.category_id} category={category.name} data={filteredArray} retrieveData={retrieveData}/>;
        }
    
        return null;
      };
  
    useEffect(() => {
    }, [toggledCategories]);

    console.log("category", categories)
    // console.log("toggledCategories ",toggledCategories)
    // console.log("sortedCategories ",sortedCategories)

  
    return (
        <>
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
        </>
    )
}
