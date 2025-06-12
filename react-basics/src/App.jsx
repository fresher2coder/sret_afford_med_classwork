import "./App.css";
import Parent from "./components/Parent";
import UserLayout from "./pages/UserLayout";
import Users from "./pages/Users";

function App() {
  return (
    <>
      <h1>Welcome to React</h1>
      <h2>React is fun</h2>
      <Users />

      <UserLayout>
        <h2>User Dashboard</h2>
        <p>User can view their profile</p>
      </UserLayout>

      <UserLayout>
        <h2>User Settingd</h2>
        <p>User can edit their profile</p>
      </UserLayout>

      <Parent />
    </>
  );
}

export default App;
