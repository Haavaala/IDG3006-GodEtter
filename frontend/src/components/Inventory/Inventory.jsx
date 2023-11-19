import { useState, useEffect } from "react";
import './inventory.css';
import InventoryCategory from '../InventoryCategory/InventoryCategory';
import '../Filter/filter.css'
import FilterButton from '../Filter/FilterButton'

export default function Inventory({data, categories}) {

    if (!categories && !data) return null; // Sjekker om category og data ikke eksisterer, hvis saa - ikkje gjoer naake.

    const [toggledCategories, setToggledCategories] = useState([]);


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

  
    return (
        <>
        {/* <div className='filter-container'>
          {categories.map((category, index) => (
            <FilterButton key={index} filterText={category.name} id={category.category_id} activeStatus={category.active} toggleFilterFunc={toggleFilter}
            />
          ))}
        </div> */}
        <div className='filter-container'>
          {toggledCategories.map((category, index) => (
            <FilterButton key={index} filterText={category.name} id={category.category_id} activeStatus={category.active} toggleFilterFunc={toggleFilter}
            />
          ))}
        </div>
                
        {toggledCategories.map((category) => {
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
