import React from "react";

const UserProfile = (props) => {
  console.log(props); // immutable object
  console.log(props.name);
  //   props.name = "New Name"; // This will not change the original prop value
  const { name, age, isMarried } = props;
  //   name = name.toUpperCase(); // This will not change the original prop value

  if (!props.name) {
    return <p>No user data available</p>;
  }
  return (
    <>
      <section id="user-profile">
        <h2>UserProfile</h2>
        <p>Name: {name}</p>
        {age && <p>Age: {age}</p>}
        <p>Married: {isMarried ? "Yes" : "No"}</p>
      </section>
    </>
  );
};

export default UserProfile;
