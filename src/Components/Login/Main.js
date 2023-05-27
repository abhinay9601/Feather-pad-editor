import "./Main.css";
import Hands from "../../Images/login/hands.png";
import Monkey_pwd from "../../Images/login/monkey_pwd.gif";
import monkey from "../../Images/login/monkey.gif";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MainLogin = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [pass, setPass] = useState(true);
  const [eyeopen, setEyeOpen] = useState(true);
  const [ispass, setIsPass] = useState();
  const[userValid,setUserValid] = useState(true);
  const navigate = useNavigate();

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const emailclick = () => {
    setIsPass(false);
    setEyeOpen(true);
  };

  const passclick = () => {
    setIsPass(true);
    setEyeOpen(false);
  };
  const showPasswordHandler = () => {
    setPass(!pass);
    if (pass) {
      document.getElementById("pwdbar").type = "text";
    } else {
      document.getElementById("pwdbar").type = "password";
    }
  };
  useEffect(() => {
    if (ispass && pass) setEyeOpen(false);
    else setEyeOpen(true);
  }, [pass]);

  const submitHandler = (event) => {
    event.preventDefault();
    localStorage.setItem("Email", userName);
    localStorage.setItem("Passowrd", password);

    fetch("http://localhost:3000/form/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("message is ", data.message);
        if (data.message == "Logged in successfully") {
          navigate("/");
        } else {
          setUserName("");
          setPassword("");
          console.log("working");
          setUserValid(false);
        }
      })
      .catch((error) => {
        console.error("ERROR IS ", error);
      });
  };

  return (
    <div className="outsideContainerlogin">
      <div className="maincontainer">
        <div className="monkeylogin">
          <div
            className="animcon"
            id="animcon"
            style={{
              backgroundImage: eyeopen
                ? `url(${monkey})`
                : `url(${Monkey_pwd})`,
            }}
          >
            <img
              id="hands"
              src={Hands}
              alt="hands for password"
              style={{ marginTop: eyeopen ? "110%" : "0%" }}
            />
          </div>
          <div className="formcon">
            {!userValid && <p className="m-1 text-red-600">Invalid email or password</p>}
            <form>
              <input
                type="email"
                id="mail"
                name="username"
                value={userName}
                onClick={emailclick}
                onChange={userNameHandler}
                className="tb"
                placeholder="Email"
                autoComplete="off"
              />
              <br />
              <br />
              <input
                type="password"
                id="pwdbar"
                value={password}
                onClick={passclick}
                onChange={passwordHandler}
                name="pwd"
                className="tb"
                placeholder="Password"
              />
              <br />
              <div className="checkdiv">
                <input
                  type="checkbox"
                  className="checkbox"
                  onClick={showPasswordHandler}
                ></input>
                <span className="show">Show Password</span>
              </div>
              <br />
              {/* <Link to="/"> */}{" "}
              <input
                type="submit"
                name=""
                onClick={submitHandler}
                className="sbutton"
                value="L O G I N"
              />
              {/* </Link> */}
              <div className="regi">
                <Link to="/signin">
                  {" "}
                  <span className="registerdown">
                    Not an account? Register{" "}
                  </span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLogin;
