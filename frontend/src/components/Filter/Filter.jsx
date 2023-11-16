import React, {useState, useEffect} from 'react'
import './filter.css'
import FilterButton from './FilterButton'
import instance from "../../instance"

function Filter({categories}) {
    // Hente kategori fra database
    const buttonText = ["Meieri", "Frukt", "Grønnsaker", "kjøtt", "Bakeri"]
   
    if (!categories) return null;
    
  return (
    <div className='filter-container'>
        {categories.map((category, index) => (
          <FilterButton key={index} filterText={category.name}/>
        ))}
    </div>
  )
}

export default Filter