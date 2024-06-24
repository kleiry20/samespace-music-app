import { useState } from "react";
import "./Search.css";
import { CiSearch } from "react-icons/ci";

const Search = (props: any) => {
  //   const [searchText, setSearchText] = useState("");
  const { searchText, setSearchText, generateSearchResult } = props;

  function handleSearch(e: any) {
    e.preventDefault();
    const searchTerm = searchText.trim();
    console.log("searchTerm", searchTerm);
    props.generateSearchResult();
  }

  return (
    <div className="search-div gradient">
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="text"
        className="search"
        placeholder="Search Song, Artist"
      />
      <button onClick={handleSearch}>search</button>
      <CiSearch className="search-icon" />
    </div>
  );
};

export default Search;
