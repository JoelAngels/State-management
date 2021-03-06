import "./App.css";
import MovieList from "./MovieList";
import { MovieProvider } from "./MovieContext";
import AddMovie from "./AddMovie";

function App() {
  return (
    <MovieProvider>
      <div className="App">
        <MovieList />
        <AddMovie />
      </div>
    </MovieProvider>
  );
}

export default App;
