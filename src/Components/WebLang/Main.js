import "./Main.css";
import { Link } from "react-router-dom";
import { GiSpiderWeb } from "react-icons/gi";
import { BiArrowBack } from "react-icons/bi";
import { saveAs } from "file-saver";

const MainWeb = () => {
  const compile = () => {
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var code = document.getElementById("code").contentWindow.document;

    console.log(html.value)

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
  const saveHtml = () => {
    var html = document.getElementById("html");
    const fileToSave = new Blob([html.value], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(fileToSave, "example.html");
  };
  const saveCss = () => {
    var css = document.getElementById("css");
    const fileToSave = new Blob([css.value], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(fileToSave, "example.css");
  };
  const saveJs = () => {
    var js = document.getElementById("js");
    const fileToSave = new Blob([js.value], {
      type: "text/plain;charset=utf-8",
    });
    saveAs(fileToSave, "example.js");
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
            <GiSpiderWeb></GiSpiderWeb> WEB EDITOR
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
            <div
            onClick={saveHtml}
              style={{width:"min-content"}}
              className="font-bold border-2 py-1 px-3 mx-2 rounded border-black bg-green-600"
            >
              save
            </div>
          </div>
          <div>
            <p>
              <span className="span2">{" * "}</span>CSS
            </p>
            <div
            onClick={saveCss}

              style={{width:"min-content"}}
              className="font-bold border-2 py-1 px-3 mx-2 rounded border-black bg-green-600"
            >
              save
            </div>
          </div>
          <div>
            <p>
              <span className="span3">{"()"}</span>JavaScript
            </p>
            <div
            onClick={saveJs}

              style={{width:"min-content"}}
              className="font-bold border-2 py-1 px-3 mx-2 rounded border-black bg-green-600"
            >
              save
            </div>
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
