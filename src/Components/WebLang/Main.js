import "./Main.css";
import { Link } from "react-router-dom";
import { GiSpiderWeb } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";

const MainWeb = () => {
  const compile = () => {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    document.body.onkeyup = function () {
      code.open();
      code.writeln(
        html.value +
          "<style>" +
          css.value +
          "</style>" +
          "<script>" +
          js.value +
          "</script>"
      );
      code.close();
    };
  };

  // compile();
  return (
    <div className="web">
      <div id="web">
        <div className="topweb">
          <div className="backweb">
            <span>
              <Link to="/">
                <BiArrowBack></BiArrowBack>
              </Link>
            </span>{" "}
          </div>
          <div className="webname flex">
            <GiSpiderWeb></GiSpiderWeb> {" "}
             WEB EDITOR
          </div>
          <div className="innertopweb">
            <div>
              <Link to="/login">
                {" "}
                <button className="webbutton">LOGIN</button>
              </Link>
            </div>
            <div>
              <Link to="/signin">
                {" "}
                <button className="webbutton">REGISTER</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="webeditor">
          <div>
            <p>
              <span>{"/"}</span>HTML
            </p>
          </div>
          <div>
            <p>
              <span className="span2">{" * "}</span>CSS
            </p>
          </div>
          <div>
            <p>
              <span className="span3">{"()"}</span>JavaScript
            </p>
          </div>
        </div>
        <textarea onKeyUp={compile} id="html" placeholder="HTML"></textarea>
        <textarea onkeyup={compile} id="css" placeholder="CSS"></textarea>
        <textarea onKeyUp={compile} id="js" placeholder="JavaScript"></textarea>
        <iframe id="code" title="output"></iframe>
      </div>
    </div>
  );
};
export default MainWeb;
