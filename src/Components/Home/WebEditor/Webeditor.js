import "./Webeditor.css";
import WebEditor from "../../../Images/WebEditor.png";
import { Link } from "react-router-dom";

const Webeditor = () => {
  return (
    <div className="outerdivwebeditor ">
      <div className="innerdivfirstwebeditor">
        <h2 className="my-4 text-white font-medium">Web Editor</h2>
        <p>
          Welcome to our web editor.It is a social development environment for
          front end web users and developers. Build your website and show off
          your work, build test cases to learn and debug, and find inspiration.
        </p>
        <p>
          Browse and share work from world-class designers and developers in the
          front-end community.
        </p>
        <Link to="/webeditor" ><button className="mainwebbutton">Try WebEditor</button></Link>
      </div>
      <div className="innerdivsecondwebeditor">
        <img className="img" src={WebEditor} alt="image of web Editor" />
      </div>
    </div>
  );
};

export default Webeditor;
