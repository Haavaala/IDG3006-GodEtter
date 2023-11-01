import React from 'react'
import './filter.css'
import FilterButton from './FilterButton'

function Filter() {

    // Hente kategori fra database
    const buttonText = ["Meieri", "Frukt", "Grønnsaker", "kjøtt", "Bakeri"]
    
  return (
    <div className='filter-container'>
        {buttonText.map((category, index) => (
          <FilterButton key={index} filterText={category}/>
        ))}
    </div>
  )
}

export default Filter