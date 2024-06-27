import { useState } from "react";
import "./SongList.css";
import ListItem from "./ListItem/ListItem";
import Search from "./Search/Search";

const SongList = (props: any) => {
  const [searchText, setSearchText] = useState("");

  const [tab, setTab] = useState("tab1");
  const { data, activeSong, setActiveSong, searchResults, setSearchResults } =
    props;

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

    const searchResults = data.data.filter((item: any) => {
      if (item.name.toLowerCase().includes(searchText)) {
        return item;
      }
    });

    if (searchResults.length === 0) {
      console.log("No results found.");
      setSearchResults([]);
      return;
    } else {
      setSearchResults(searchResults);
      setSearchText("");
    }
  }
  console.log("generateSearchResult", searchResults);

  return (
    <div className="song-list">
      <div className="tab-list">
        <a className="tab" onClick={() => setTab("tab1")}>
          For You
        </a>
        <a className="tab" onClick={() => setTab("tab2")}>
          Top Tracks
        </a>
      </div>
      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        generateSearchResult={generateSearchResult}
      />

      {searchResults ? (
        <Tabs
          searchText={searchText}
          tab={tab}
          data={searchResults}
          activeSong={activeSong}
          setActiveSong={setActiveSong}
          searchResults={searchResults}
        />
      ) : (
        <Tabs
          searchText={searchText}
          tab={tab}
          data={data}
          activeSong={activeSong}
          setActiveSong={setActiveSong}
        />
      )}
    </div>
  );
};

export default SongList;

const Tabs = (props: any) => {
  return (
    <div>
      {props.tab === "tab1" && (
        <ListItem
          data={props.data}
          activeSong={props.activeSong}
          setActiveSong={props.setActiveSong}
          searchResults={props.searchResults}
        ></ListItem>
      )}
      {props.tab === "tab2" && <div>tab 2</div>}
    </div>
  );
};
