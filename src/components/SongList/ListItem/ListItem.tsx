import "./ListItem.css";

const ListItem = (props: any) => {
  const { data, activeSong, setActiveSong, searchResults } = props;

  return (
    <section className="song-wrapper">
      {searchResults
        ? searchResults.map((item: any) => (
            <li
              tabIndex={-1}
              className={`song-item`}
              key={item.id}
              onClick={() => {
                setActiveSong(item);
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
            </li>
          ))
        : data.data.map((item: any) => (
            <li
              tabIndex={-1}
              className={`song-item`}
              key={item.id}
              onClick={() => {
                setActiveSong(item);
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
            </li>
          ))}
    </section>
  );
};

export default ListItem;
