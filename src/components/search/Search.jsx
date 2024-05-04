import React from "react";

import "./Search.css";

const Search = ({ searchValue, onSearchInput, setSearchValue, onSearchClear }) => {
  return (
    <div className="search">
      <div className="search-block">
        <img src="img/search.svg" alt="Search" className="search-img" />
        {searchValue && (
          <img
            className="clear"
            onClick={() => onSearchClear()}
            src="img/btn-remove.svg"
            alt="Clear"
          />
        )}
        <input
          onChange={onSearchInput}
          value={searchValue}
          placeholder="Поиск"
        />
      </div>
    </div>
  );
};

export default Search;
