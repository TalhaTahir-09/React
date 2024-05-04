import { useState, useEffect, createContext } from "react";
import { getDataFromLS } from "../forms";
import { useNavigate } from "react-router-dom";

export default function Addform() {
  // State
  const navigate = useNavigate();
  const [forms, setForms] = useState(getDataFromLS);
  const [error, setError] = useState({
    email: { type: false, msg: "" },
    phoneNumber: { type: false, msg: "" },
    password: { type: false, msg: "" },
    cPassword: { type: false, msg: "" },
  });
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    localStorage.setItem("Forms", JSON.stringify(forms));
  }, [forms]);

  // Testers:

  function emailTester(e) {
    let input = e.target.value;
    let emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b/;
    if (emailPattern.test(input) === false) {
      setError({
        email: {
          type: true,
          msg: "Email must contain @gmail.com, @yahoo.com",
        },
        phoneNumber: error?.phoneNumber,
      });
    } else {
      setError({
        email: { type: false, msg: "" },
        phoneNumber: error?.phoneNumber,
        password: error?.password,
      });
    }
  }

  const phoneNumberTester = (e) => {
    let input = e.target.value;
    let inputArray = input.split("");
    let inputNumber = parseInt(input);
    if (inputNumber === NaN) {
      setError({
        email: error?.email,
        phoneNumber: { type: true, msg: "Please enter correct number(0-9)!" },
        password: error?.password,
      });
    } else if (inputArray.length !== 11) {
      setError({
        email: error?.email,
        phoneNumber: {
          type: true,
          msg: "Number must container 11 characters!",
        },
        password: error?.password,
      });
    } else {
      setError({
        email: error?.email,
        phoneNumber: { type: false, msg: "" },
        password: error?.password,
      });
    }
  };

  const passwordChecker = (e) => {
    let input = e.target.value;
    let passwordPattern = /^(?=.*[A-Z])[A-Za-z\d]{8,}$/;
    let passowrdDeterminer = passwordPattern.test(input);
    if (passowrdDeterminer === false) {
      setError({
        email: error?.email,
        phoneNumber: error?.phoneNumber,
        password: { type: true, msg: "Password must contain (A-z)" },
      });
    } else {
      setError({
        email: error?.email,
        phoneNumber: error?.phoneNumber,
        password: { type: false, msg: "" },
      });
    }
  };
  const cPasswordChecker = (e) => {
    let input = e.target.value;
    if (userData.password !== input) {
      console.log(
        userData.password +
          " user password : " +
          userData.confirmPassword +
          " C user Password"
      );
      setError({
        email: error?.email,
        phoneNumber: error?.phoneNumber,
        password: error?.password,
        cPassword: { type: true, msg: "Both passwords are not eqaual!" },
      });
    } else {
      setError({
        email: error?.email,
        phoneNumber: error?.phoneNumber,
        password: error?.password,
        cPassword: { type: false, msg: "" },
      });
    }
  };

  // Value Assigners
  let name, value;
  const handleUserValue = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const realEmailTester = (e) => {
    handleUserValue(e);
    emailTester(e);
  };
  const realPasswordChecker = (e) => {
    handleUserValue(e);
    passwordChecker(e);
  };
  const realCPasswordChecker = (e) => {
    handleUserValue(e);
    cPasswordChecker(e);
  };
  const realPhoneNumberTester = (e) => {
    handleUserValue(e);
    phoneNumberTester(e);
  };

  // Form Value Submiter
  const formAdderSubmit = () => {
    setForms([...forms, userData]);
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
                {error.email.type === true ? (
                  <div className="error-div">{error.email.msg}</div>
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
              <div className="form-title">
                Phone Number:{" "}
                {error.phoneNumber.type === true ? (
                  <div className="error-div">{error.phoneNumber.msg}</div>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                name="phoneNumber"
                onChange={realPhoneNumberTester}
                value={userData.phoneNumber}
                className="input-area"
              />
            </div>
            <div className="form-password">
              <div className="form-title">
                Password:{" "}
                {error?.password?.type === true ? (
                  <div className="error-div">{error.password.msg}</div>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                name="password"
                onChange={realPasswordChecker}
                value={userData.password}
                className="input-area"
              />
            </div>
            <div className="form-confirm-password">
              <div className="form-title">
                Confirm Password:{" "}
                {error?.cPassword?.type === true ? (
                  <div className="error-div">{error.cPassword.msg}</div>
                ) : (
                  ""
                )}
              </div>
              <input
                type="text"
                name="confirmPassword"
                onChange={realCPasswordChecker}
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
