import React, { memo } from "react";

const CountDisplayer = memo(function CountDisplayer({count}) {
  console.log("Count Child rendered!");
  return (
    <>
      <p>The Count is : {count}</p>
    </>
  );
});

export default CountDisplayer;
