import { useState } from "react";
import "./SongList.css";
import ListItem from "./ListItem/ListItem";
import Search from "./Search/Search";
import { RootState } from "../../store";
import { useSelector } from "react-redux";

const SongList = (props: any) => {
  const [tab, setTab] = useState("tab1");
  const { data } = props;

  const searchList = useSelector(
    (state: RootState) => state.search.searchResults
  );

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
      <Search data={data} />

      {searchList && searchList.length > 0 ? (
        <Tabs tab={tab} data={searchList} />
      ) : (
        <Tabs tab={tab} data={data} />
      )}
    </div>
  );
};

export default SongList;

const Tabs = (props: any) => {
  return (
    <div className="tab-wrapper">
      {props.tab === "tab1" && <ListItem data={props.data}></ListItem>}
      {props.tab === "tab2" && <div>tab2 content</div>}
    </div>
  );
};
