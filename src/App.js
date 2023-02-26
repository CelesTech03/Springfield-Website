import "./App.css";
import Restaurants from "./components/Restaurants";
import Homepage from "./components/Homepage";
import Attractions from "./components/Attractions";
import Lodging from "./components/Lodging";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/restaurants" element={<Restaurants />} />
            <Route path="/attractions" element={<Attractions />} />
            <Route path="/lodging" element={<Lodging />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
