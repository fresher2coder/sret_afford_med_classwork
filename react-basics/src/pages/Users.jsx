import UserProfile from "../components/UserProfile";

function Users() {
  return (
    <>
      <h1>Users</h1>
      <section id="users">
        <UserProfile name="Dineshkumar" age={34} isMarried={true} />
        <UserProfile name="Divya Dineshkumar" age={31} isMarried={true} />
        <UserProfile name="Darwin Divy Dinesh" isMarried={false} />
        <UserProfile />
      </section>
    </>
  );
}

export default Users;
