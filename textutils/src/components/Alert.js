import React from "react";

function Alert(props) {
  return (
    <div>
      <div
        className={`alert alert-${props.alert.type} d-flex align-items-center`}
        role="alert"
      >{props.alert.msg}
        <div></div>
      </div>
    </div>
  );
}

export default Alert;
