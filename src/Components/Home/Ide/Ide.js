import "./Ide.css";
import Ideimg from "../../../Images/ide.png";
import { Link } from "react-router-dom";

const Ide = () => {
  return (
    <div className="outerdivide">
      <div className="innerdivfirstide">
        <h2 className="my-4 text-white font-medium">Code Editor </h2>
        <p>
          Welcome to our Code Editor. Use this editor for solving your problem
          statement in any choice of your language.There are 40+ languages in which you can write code like C, C++, Python, Java, Go, Php... and many more.
        </p>
        <p>
          Browse and share work from world-class designers and developers in the
          front-end community.
        </p>
        <Link to="/codeeditor">
          <button className="mainidebutton">Try our CodeEditor</button>
        </Link>
      </div>
      <div className="innerdivsecondide">
        <img className="img" src={Ideimg} alt="image of web Editor" />
      </div>
    </div>
  );
};
export default Ide;
