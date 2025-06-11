import MainLayout from "./layouts/MainLayout";
import AppRouter from "./routes/AppRouter";
import "./App.css";
import { MovieProvider } from "./contexts/MovieContext";

function App() {
  return (
    <>
      {/* The AppRouter will handle the routing for the application */}

      <MovieProvider>
        <AppRouter />
      </MovieProvider>
    </>
  );
}

export default App;
