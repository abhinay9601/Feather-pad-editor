import "./Header.css";
import { GiFeather, GiHummingbird } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="headerOutside">
      <div className="headerlogo">
        <GiHummingbird />
      </div>
      <div className="headerContent">
        <div className="flex">
          <span className="feather">
            <GiFeather />
          </span>
          Feather Pad Editor
        </div>
      </div>
      <div className="headerbutton">
        <div className="buttoncontainer">
          <Link to="/login">
            {" "}
            <button className="headerbuttons">LOGIN</button>
          </Link>
        </div>
        <div className="buttoncontainer">
          <Link to="/signin">
            {" "}
            <button className="headerbuttons">REGISTER</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
