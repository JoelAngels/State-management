import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
      </div>
    </MovieProvider>
  );
}

export default App;
