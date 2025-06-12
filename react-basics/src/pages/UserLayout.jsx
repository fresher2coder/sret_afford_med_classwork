import React from "react";

function UserLayout({ children }) {
  //   console.log("UserLayout props:", props.children);
  return (
    <>
      <h1>User Layout</h1>
      {children}
    </>
  );
}

export default UserLayout;
