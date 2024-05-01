import { useState, useEffect, createContext } from "react";
import { getDataFromLS } from "../forms";
import { useNavigate } from "react-router-dom";

export default function Addform() {
  // State
  const navigate = useNavigate();
  const [forms, setForms] = useState(getDataFromLS);
  const [error, setError] = useState({ type: false, msg: "" });
  useEffect(() => {
    localStorage.setItem("Forms", JSON.stringify(forms));
  }, [forms]);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  // functions
  let name, value;
  const handleUserValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  
  function emailTester(e) {
    let input = e.target.value;
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if (emailPattern.test(input) === false) {
      setError({
        type: true,
        msg: "Email must contain @gmail.com or @yahoo.com etc!",
      });
    } else {
      setError({ type: false, msg: "" });
    }
  }
  const realEmailTester = (e) => {
    handleUserValue(e);
    emailTester(e);
  };

  // Form adder
  const formAdderSubmit = () => {
    setForms([ ...forms , userData ]);
    setUserData({
      name: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    });
    setTimeout(() => {
      navigate("/forms");
    }, 100);
  };

  return (
    <>
      <h1>Add your Credentials:</h1>
      <div className="form-container">
        <form action="">
          <div className="inner-form-div">
            <div className="form-name">
              <div className="form-title">Username:</div>
              <input
                type="text"
                name="name"
                onChange={handleUserValue}
                value={userData.name}
                className="input-area"
              />
            </div>
            <div className="form-email">
              <div className="form-title">
                Email:{" "}
                {error.type === true ? (
                  <div className="error-div">{error.msg}</div>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                name="email"
                value={userData.email}
                onChange={realEmailTester}
                className="input-area"
              />
            </div>
            <div className="form-phone-number">
              <div className="form-title">Phone Number:</div>
              <input
                type="text"
                name="phoneNumber"
                onChange={handleUserValue}
                value={userData.phoneNumber}
                className="input-area"
              />
            </div>
            <div className="form-password">
              <div className="form-title">Password:</div>
              <input
                type="text"
                name="password"
                onChange={handleUserValue}
                value={userData.password}
                className="input-area"
              />
            </div>
            <div className="form-confirm-password">
              <div className="form-title">Confirm Password:</div>
              <input
                type="text"
                name="confirmPassword"
                onChange={handleUserValue}
                value={userData.confirmPassword}
                className="input-area"
              />
            </div>
          </div>
          <button
            type="button"
            className="submit-btn"
            onClick={formAdderSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
