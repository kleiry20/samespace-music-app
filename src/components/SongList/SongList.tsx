import { useState } from "react";
import "./SongList.css";
import ListItem from "../ListItem/ListItem";

const SongList = (props: any) => {
  const [tab, setTab] = useState("tab1");
  const { data } = props;

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
      <Tabs tab={tab} data={data} />
    </div>
  );
};

export default SongList;

const Tabs = (props: any) => {
  // console.log("props in tabs", props);

  return (
    <div>
      {props.tab === "tab1" && (
        <ListItem data={props.data}>this is content of tab 1</ListItem>
      )}
      {props.tab === "tab2" && <div>this is content of tab 2</div>}
    </div>
  );
};
