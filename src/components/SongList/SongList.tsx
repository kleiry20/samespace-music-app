import { useState } from "react";
import "./SongList.css";
import ListItem from "./ListItem/ListItem";
import Search from "./Search/Search";

const SongList = (props: any) => {
  const [searchText, setSearchText] = useState("");
  // const [activeSong, setActiveSong] = useState();

  const [tab, setTab] = useState("tab1");
  const { data, activeSong, setActiveSong } = props;

  function generateSearchResult() {
    const searchResults = data.data.filter((item: any) => {
      if (item.name.toLowerCase().includes(searchText)) {
        return item;
      }
    });
    console.log("searchResults", searchResults);
    setSearchText("");
  }
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
      <Tabs
        searchText={searchText}
        tab={tab}
        data={data}
        activeSong={activeSong}
        setActiveSong={setActiveSong}
      />
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
        ></ListItem>
      )}
      {props.tab === "tab2" && <div>tab 2</div>}
    </div>
  );
};
