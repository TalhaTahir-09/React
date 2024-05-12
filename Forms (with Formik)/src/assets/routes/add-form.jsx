import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

export default function Addform() {
  // State
  const navigate = useNavigate();
  const [forms, setForms] = useState(getDataFromLS);
  useEffect(() => {
    localStorage.setItem("Forms", JSON.stringify(forms));
  }, [forms]);
  function getDataFromLS() {
    var ArrayForms = localStorage.getItem("Forms");
    if (ArrayForms) {
      return (ArrayForms = JSON.parse(ArrayForms));
    } else {
      return [];
    }
  }

  // Form Schema
  const phoneRegex =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string()
      .min(4, "Too Short!")
      .max(15, "Too Long!")
      .required("Required"),
    userName: Yup.string()
      .min(3, "Too Short!")
      .max(13, "Too Long!")
      .required("Required"),
    cPassword: Yup.string().oneOf(
      [Yup.ref("password"), null],
      "Passwords must match"
    ),
    phoneNumber: Yup.string()
      .min(10, "Invalid")
      .required("Required")
      .matches(phoneRegex, "Invalid"),
  });
  return (
    <>
      <h1>Add your Credentials:</h1>
      <div className="form-container">
        <Formik
          initialValues={{
            email: "",
            password: "",
            userName: "",
            cPassword: "",
            phoneNumber: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              setForms([...forms, values]);
              setSubmitting(false);
            }, 400);
            setTimeout(() => {
              navigate("/forms");
            }, 600);
          }}
        >
          <Form>
            <div className="inner-form-div">
              <div className="form-name">
                <div className="form-title">
                  Username:
                  <span className="error-div">
                    <ErrorMessage name="userName" />
                  </span>
                </div>
                <Field type="text" name="userName" className="input-area" />
              </div>
              <div className="form-email">
                <div className="form-title">
                  Email:
                  <span className="error-div">
                    <ErrorMessage name="email" />
                  </span>
                </div>
                <Field type="email" name="email" className="input-area" />
              </div>
              <div className="form-phone-number">
                <div className="form-title">
                  Phone Number:{" "}
                  <span className="error-div">
                    <ErrorMessage name="phoneNumber" />
                  </span>
                </div>
                <Field
                  type="phonenumber"
                  name="phoneNumber"
                  className="input-area"
                />
              </div>
              <div className="form-password">
                <div className="form-title">
                  Password:{" "}
                  <span className="error-div">
                    <ErrorMessage name="password" />
                  </span>
                </div>
                <Field type="password" name="password" className="input-area" />
              </div>
              <div className="form-confirm-password">
                <div className="form-title">
                  Confirm Password:
                  <span className="error-div">
                    <ErrorMessage name="cPassword" />
                  </span>
                </div>
                <Field
                  type="password"
                  name="cPassword"
                  className="input-area"
                />
              </div>
            </div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
