import "./App.css";
import { original, ActionMovies, RomanceMovies,Trending,ComedyMovies,HorrorMovies } from "./constants/urls";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      RomanceMovies
      <NavBar></NavBar>
      <Banner></Banner>
      <RowPost url={Trending} title="Trending" ></RowPost>
      <RowPost url={ActionMovies} title="ActionMovies" isSmall></RowPost>
      <RowPost url={RomanceMovies} title="RomanceMovies" isSmall></RowPost>
      <RowPost url={ComedyMovies} title="ComedyMovies" isSmall></RowPost>
      <RowPost url={original} title="Netflix Originals" isSmall></RowPost>
      <RowPost url={HorrorMovies} title="HorrorMovies" isSmall></RowPost>
    </div>
  );
}

export default App;