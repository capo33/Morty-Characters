import "./App.css";
import CharactersList from "./pages/CharactersList";
import { Routes, Route } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
        <Route path="/Search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
