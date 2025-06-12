import React from "react";

function Child({ message }) {
  const msg = "Hello from Child Component";
  return (
    <>
      <button
        onClick={() => {
          message(msg);
        }}
      >
        Send
      </button>
    </>
  );
}

export default Child;
