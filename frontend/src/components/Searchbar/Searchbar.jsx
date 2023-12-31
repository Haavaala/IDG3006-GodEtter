import React from "react";
import "./searchbar.css";

function Searchbar({ searchInput, setSearchInput }) {
  return (
    <div className="search">
      <div className="search-box">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="11.5"
            cy="11.5"
            r="9.5"
            stroke="#1A1A1A"
            stroke-width="1.5"
          />
          <path
            d="M18.5 18.5L22 22"
            stroke="#1A1A1A"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>

        <form>
          <input
            className="input-field"
            type="text"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </form>
      </div>
    </div>
  );
}

export default Searchbar;
