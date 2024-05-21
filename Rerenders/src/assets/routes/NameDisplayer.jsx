import { memo } from "react";

const NameDisplayer = memo(function NameDisplayer({name}) {
  console.log("Name Child rendered!");
  return (
    <>
      <h1>Hello {name}!</h1>
    </>
  );
});

export default NameDisplayer;
