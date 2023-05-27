import styles from "./Main.css";
import PhoneInput from "react-phone-input-2";
import { Link } from "react-router-dom";
import { useState } from "react";
const MainSignin = () => {
  const [phone, setphone] = useState("");
  const [email, setEmail] = useState("");
  // const [contactNo, setContactNo] = useState("");
  const [password, setPassword] = useState("");

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = () => {
    localStorage.setItem("Email",email);
    localStorage.setItem("Passowrd",password)
    localStorage.setItem("Phone",phone)

    fetch('http://localhost:3000/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password:password,
        phone:phone
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

  };

  return (
    <div className="outsideContainerlogin">
      <div className="maincontainer">
        <div className="monkeylogin">
          <div className="registertext">Register</div>
          <div className="formcon">
            <form>
              <div className="form">
                <div>
                  <input
                    type="text"
                    id="mail"
                    name="username"
                    onChange={emailHandler}
                    className="tb input"
                    placeholder="Email"
                    autoComplete="off"
                  />
                </div>

                <br />
                <div>
                  <PhoneInput
                    className=""
                    specialLabel={""}
                    country={"in"}
                    value={phone}
                    onChange={(phone) => setphone(phone)}
                  />
                </div>
                <br />
                <div>
                  <input
                    type="password"
                    id="pwdbar"
                    // onClick={passclick}
                    onChange={passwordHandler}
                    name="pwd"
                    className="tb input"
                    placeholder="Password"
                  />
                </div>
                <br />
                <br />
                <div>
                  <Link to="/">
                    {" "}
                    <input
                      type="submit"
                      name=""
                      onClick={submitHandler}
                      className="sbutton"
                      value="R E G I S T E R"
                    />
                  </Link>
                </div>
                <br />
                <div className="regi">
                  <Link to="/login">
                    {" "}
                    <span className="registerdown">
                      Already account? Login{" "}
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSignin;
