import React from "react";
import Child from "./Child";

function Parent() {
  const message = (msg) => {
    alert(msg);
  };
  return (
    <>
      <Child message={message} />
    </>
  );
}

export default Parent;
