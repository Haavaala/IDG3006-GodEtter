import React, {useState, useEffect} from 'react'
import './filter.css'
import FilterButton from './FilterButton'
import instance from "../../instance"

function Filter() {
    // Hente kategori fra database
    const buttonText = ["Meieri", "Frukt", "Grønnsaker", "kjøtt", "Bakeri"]

    const [categorieses, setCategorieses] = useState();

    useEffect(() => {
      // if (categories !== null){
      //   return
      // }

      retrieveCategory();
    }, []);

    const retrieveCategory = () => {
        // Set device id
        const deviceId = 1001;
  
        // Axios POST req til /get_device_inventory.php med deviceId i data
        instance
            .post("/get_categories.php", { device_id: deviceId })
            .then((res) => {
                setCategorieses(res.data.data);
            });
    }
    if (!categorieses) return null;
    
  return (
    <div className='filter-container'>
        {categorieses.map((category, index) => (
          <FilterButton key={index} filterText={category.name}/>
        ))}
    </div>
  )
}

export default Filter