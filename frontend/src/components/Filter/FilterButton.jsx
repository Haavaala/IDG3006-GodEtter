import React, { useState } from 'react';
import './filter.css';

function FilterButton({filterText, key}) {
  const [active, setActive] = useState(false);

  const toggleFilter = () => {
    setActive(!active);
  }

  return (
    <button className={`filterButton ${active ? 'active' : ''}`} onClick={toggleFilter} key={key}>
      <i className="filterIcon">{active ? '-' : '+'}</i> <p className='filterText'>{filterText}</p>
    </button>
  );
}

export default FilterButton;