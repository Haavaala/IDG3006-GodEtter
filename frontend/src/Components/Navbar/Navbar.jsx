import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <>
      <nav>
        <ul>
          <li
            key={0}
            className={activeItem === 0 ? 'active' : ''}
            onClick={() => handleItemClick(0)}
          >
            <i>i</i> {activeItem === 0 ? 'Kjøleskap' : ''}
          </li>
          <li
            key={1}
            className={activeItem === 1 ? 'active' : ''}
            onClick={() => handleItemClick(1)}
          >
            <i>i</i> {activeItem === 1 ? 'Oppskrifter' : ''}
          </li>
          <li
            key={2}
            className={activeItem === 2 ? 'active' : ''}
            onClick={() => handleItemClick(2)}
          >
            <i>i</i> {activeItem === 2 ? 'Handleliste' : ''}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;