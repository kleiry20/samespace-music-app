import "./ListItem.css";

const ListItem = (props: any) => {
  console.log("props in list item", props);
  const { data } = props;
  return (
    <div className="song-wrapper">
      {data.data.map((item: any) => (
        <li className="song-item">
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
    </div>
  );
};

export default ListItem;
