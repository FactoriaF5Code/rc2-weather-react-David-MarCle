import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchForm({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch(searchValue);
    }
  };

  const handleClick = () => {
    onSearch(searchValue);
  };

  return (
    <section className="searchContainer">
      <input
        className="searchContainer__input"
        type="text"
        placeholder="   ciudad, país..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        onKeyDown={handleKeyDown}
        autoFocus
      />
      <button className="searchContainer__lupa" onClick={handleClick}>
        <SearchIcon />
      </button>
    </section>
  );
}
