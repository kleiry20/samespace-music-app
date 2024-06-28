import "./ListItem.css";
import { useDispatch, useSelector } from "react-redux";
import { selectSong } from "../../../features/player/player";
import { RootState } from "../../../store";

const ListItem = (props: any) => {
  const { data } = props;

  const dispatch = useDispatch();
  const searchList = useSelector(
    (state: RootState) => state.search.searchResults
  );

  return (
    <section className="song-wrapper">
      {searchList && searchList.length > 0
        ? searchList.map((item: any) => (
            <li
              tabIndex={-1}
              className={`song-item`}
              key={item.id}
              onClick={() => {
                dispatch(selectSong(item));
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
        : data.map((item: any) => (
            <li
              tabIndex={-1}
              className={`song-item`}
              key={item.id}
              onClick={() => {
                dispatch(selectSong(item));
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
