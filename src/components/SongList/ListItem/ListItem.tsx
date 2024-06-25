import { useState } from "react";
import "./ListItem.css";

const ListItem = (props: any) => {
  // const [activeSong, setActiveSong] = useState(0);
  const { data, activeSong, setActiveSong } = props;
  return (
    <section className="song-wrapper">
      {data.data.map((item: any) => (
        <li
          tabIndex={-1}
          className={`song-item`}
          key={item.id}
          onClick={() => {
            setActiveSong(item);
            console.log("see", item.name);
          }}
        >
          <img
            className="thumbnail"
            src={"https://picsum.photos/seed/picsum/200/300"}
            alt="thumbnail"
          />
          <div className="song-details">
            <h3>{item.name}</h3>
            <p>{item.artist}</p>
          </div>
          <p className="song-length">2:30</p>
          {/* <audio controls>
            <source src={item.url} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio> */}
        </li>
      ))}
    </section>
  );
};

export default ListItem;
