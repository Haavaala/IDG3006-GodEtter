import React, { useEffect, useState } from 'react';
import './filter.css';

function FilterButton({filterText, key, toggleFilterFunc, id, activeStatus}) {
  const [active, setActive] = useState(activeStatus || false);

  useEffect(() => {
    setActive(activeStatus);
  }, [activeStatus]);

  const toggleFilter = (id) => {
    toggleFilterFunc(id);
    setActive((prevActive) => !prevActive);
  }

  return (
    <button className={`filterButton ${active ? 'active' : ''}`} onClick={() => toggleFilter(id)} key={key}>
      <p className='filterText smallp'><i className="filterIcon">{active ? '-' : '+'}</i></p> <p className='filterText smallp'>{filterText}</p>
    </button>
  );
}


export default FilterButton;