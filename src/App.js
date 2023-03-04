import "./App.css";
import Restaurants from "./pages/Restaurants";
import Homepage from "./pages/Homepage";
import Attractions from "./pages/Attractions";
import Lodging from "./pages/Lodging";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/attractions" element={<Attractions />} />
        <Route path="/lodging" element={<Lodging />} />
      </Routes>
    </div>
  );
}

export default App;
