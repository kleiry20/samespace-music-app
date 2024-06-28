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
  const { data, setIsPresent } = props;
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

  function generateSearchResult(searchText: string) {
    const validationErrors = validate(searchText);

    if (validationErrors.length > 0) {
      console.error("Validation Errors:", validationErrors);
      return;
    }

    const searchResultArr = data.filter((item: any) => {
      if (item.name.toLowerCase().includes(searchText.toLowerCase())) {
        return item;
      } else {
        setIsPresent(false);
        setSearchResults([]);
      }
    });

    if (searchResultArr.length === 0) {
      console.log("No results found.");
      setIsPresent(false);
      setSearchResults([]);
      dispatch(clearSearchResult());
      return;
    } else {
      // setSearchResults(searchResults);
      for (let i = 0; i < searchResultArr.length; i++) {
        dispatch(addSearchResult(searchResultArr[i]));
      }
      setIsPresent(true);
    }
  }

  function handleSearch(e: any) {
    e.preventDefault();
    const searchTerm = searchText.trim();
    generateSearchResult(searchTerm);
  }

  return (
    <div
      className="search-div"
      style={{
        background: generateSlightlyLighterColor(`${selectedSong?.accent}`),
      }}
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
