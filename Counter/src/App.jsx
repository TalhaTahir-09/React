import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import { Button, DatePicker } from "antd";
import "./App.css";
import Child from "./Child";
import isOdd from "is-odd";
import React from "react";
let request = indexedDB.open("MyDatabase", 1);
  request.onsuccess = function (event) {
    let db = event.target.result;
    let transaction = db.transaction(["talha"]);
    let objectStore = transaction.objectStore("storeName");
    objectStore.add({ id: 1, name: "Talha" });
  };

function App() {
  
  const [countOdd, setCountOdd] = useState(" ");
  const [count, setCount] = useState(0);
  function setCounterFn() {
    setCount(count + 1);
    return count;
  }
  let oddDisplayer;
  useEffect(
    (oddDisplayer = () => {
      setCountOdd(isOdd(count) ? "Odd" : "Even");
    })
  );
  return (
    <>
      <h1>Count : {count};</h1>
      <Button onClick={setCounterFn} type="primary">
        Click Me!
      </Button>
      <h3>{countOdd}</h3>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(value) => {
          const error = {};
          console.log(value.email);
          if (value.email === "") {
            error.email = "Required";
            console.log("1");
          } else if (!/^[a-zA-Z0-9._%+-]+@gmail.com$/.test(value.email)) {
            error.email = "Invalid Email";
          }
          return error;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 1));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <Field type={"email"} name="email"></Field>
          <ErrorMessage name="email"></ErrorMessage>
          <Field type={"password"} name="password"></Field>
          <ErrorMessage name="password"></ErrorMessage>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <Child name={"Talha"} />
    </>
  );
}

export default App;
