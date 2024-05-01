import {  useState } from "react";
import { Navigate } from "react-router-dom";
import { getDataFromLS } from "../forms";
export default function forms() {
  const retreivedData = getDataFromLS();
  const [dataAna, setDataAna] = useState(getDataFromLS());
  const [goToFormAdder, setGoToFormAdder] = useState(false);
  if (goToFormAdder) {
    return <Navigate to="/add-form" />;
  }
  

  function deleteForm(name) {
    const filteredForms = retreivedData.filter(formData => formData.name !== name)
    setDataAna(filteredForms)
    localStorage.setItem('Forms', JSON.stringify(filteredForms))
  }

  return (
    <div className="home-container">
      <div className="form-heading-container">
        <h1>Forms</h1>
        <div className="form-heading-button-container">
          <button
            className="btn btn-primary"
            onClick={() => {
              setGoToFormAdder(true);
            }}
          >
            Add +
          </button>
        </div>
      </div>
      <div className="forms-list">
        <table className="table table-dark">
          {dataAna[0]? <thead>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Ph#</th>
              <th scope="col">Delete</th>
            </tr>
          </thead> : ""}
          {dataAna[0] ? (
            dataAna.map((formData) => (
              <tbody key={formData.name}>
                <tr key={formData.name}>
                  <td>{formData.name}</td>
                  <td>{formData.email}</td>
                  <td>{formData.phoneNumber}</td>
                  <td>
                    <i
                      className="bx bxs-trash trash-icon"
                      onClick={() => {
                        deleteForm(formData.name);
                      }}
                    ></i>
                  </td>
                </tr>
              </tbody>
            ))
          ) : (
            <div className="no-form-div">No forms added yet.</div>
          )}
        </table>
      </div>
    </div>
  );
}
