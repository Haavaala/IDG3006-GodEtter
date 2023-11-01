import React from 'react'
import './Filter.css'

function Filter() {

    const buttonText = ["Meieri", "Frukt", "Grønnsaker", "kjøtt", "Bakeri"]
    
  return (
    <div className='filter-container'>
        {buttonText.map((text, index) => (
          <button key={index} className='filterButton'>
            {text}
          </button>  
        ))}
    </div>
  )
}

export default Filter