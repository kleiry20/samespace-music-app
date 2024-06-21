import "./Header.css";
import { FaSpotify } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="title">
        <FaSpotify style={{ fontSize: "22px" }} />
        <p>
          Spotify<sup className="trademark">&reg;</sup>
        </p>
      </div>
      <div>avatar</div>
    </div>
  );
};

export default Header;
