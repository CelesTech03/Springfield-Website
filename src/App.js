import "./App.css";
import Restaurants from "./pages/Restaurants";
import Homepage from "./pages/Homepage";
import Attractions from "./pages/Attractions";
import Lodging from "./pages/Lodging";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Homepage />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/lodging" element={<Lodging />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
