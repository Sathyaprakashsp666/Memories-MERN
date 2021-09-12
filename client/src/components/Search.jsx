import React from "react";
import "./search.css";

const Search = ({ handleSearch, search }) => {
  return (
    <div className="searchCont">
      <input
        type="search"
        placeholder="Search a by Title name"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
};

export default Search;
