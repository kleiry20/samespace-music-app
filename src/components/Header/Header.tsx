import "./Header.css";
import { FaSpotify } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <FaSpotify style={{ fontSize: "28px" }} />
        <p>
          Spotify<sup className="trademark">&reg;</sup>
        </p>
      </div>
      <div className="user">
        <img src="https://i.pravatar.cc/400?img=12" alt="" />
      </div>
    </div>
  );
};

export default Header;
