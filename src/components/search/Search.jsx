import React from "react";

const Search = ({ searchValue, onSearchInput, setSearchValue }) => {

  return (
    <div className="search">
      <div className="search-block">
        <img src="img/search.svg" alt="Search" className="search-img" />
        {searchValue && (
          <img
            className="clear"
            onClick={() => setSearchValue('')}
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
