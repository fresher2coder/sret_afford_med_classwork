import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import MovieContext from "./contexts/MovieContext";

function App() {
  return (
    <>
      {/* The AppRouter will handle the routing for the application */}

      <AppRouter />
    </>
  );
}

export default App;
