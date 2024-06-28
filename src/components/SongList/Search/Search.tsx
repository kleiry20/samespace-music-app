import { useState } from "react";
import "./Search.css";

import { CiSearch } from "react-icons/ci";
import { generateSlightlyLighterColor } from "../../../utils/generateGradient";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../store";
import {
  addSearchResult,
  clearSearchResult,
} from "../../../features/search/search";

const Search = (props: any) => {
  const { data } = props;
  const [searchText, setSearchText] = useState<string>("");
  const [_searchResults, setSearchResults] = useState(new Array()); // @ts-ignore
  const dispatch = useDispatch();

  const selectedSong = useSelector(
    (state: RootState) => state.player.selectedSong
  );

  // validation for search
  function validate(searchText: any) {
    const errors = [];

    if (!searchText) {
      errors.push("Search text cannot be empty.");
    }
    const invalidChars = /[^a-zA-Z0-9 ]/;
    if (invalidChars.test(searchText)) {
      errors.push("Search text contains invalid characters.");
    }
    if (searchText.trim() !== searchText) {
      errors.push("Search text has leading or trailing whitespace.");
    }

    return errors;
  }

  function generateSearchResult() {
    const validationErrors = validate(searchText);

    if (validationErrors.length > 0) {
      console.error("Validation Errors:", validationErrors);
      return;
    }

    const searchResults = data.filter((item: any) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      }
    });

    if (searchResults.length === 0) {
      console.log("No results found.");
      setSearchResults([]);
      dispatch(clearSearchResult());

      return;
    } else {
      // setSearchResults(searchResults);
      for (let i = 0; i < searchResults.length; i++) {
        dispatch(addSearchResult(searchResults[i]));
      }
    }
  }

  function handleSearch(e: any) {
    e.preventDefault();
    // const searchTerm = searchText.trim();
    generateSearchResult();
  }

  return (
    <div
      className="search-div"
      style={{ background: generateSlightlyLighterColor(selectedSong?.accent) }} // @ts-ignore
    >
      <input
        onChange={(e) => setSearchText(e.target.value)}
        value={searchText}
        type="text"
        className="search"
        placeholder="Search Song, Artist"
      />
      <CiSearch onClick={handleSearch} className="search-icon" />
    </div>
  );
};

export default Search;
