import "./App.css";
import Restaurants from "./components/Restaurants";
import Homepage from "./components/Homepage";
import Attractions from "./components/Attractions";
import Lodging from "./components/Lodging";
import { Routes, Route, Outlet, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <h1>Welcome to Springfield</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="restaurants" element={<Restaurants />} />
          <Route path="attractions" element={<Attractions />} />
          <Route path="lodging" element={<Lodging />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/restaurants">
              Restaurants
            </Link>
          </li>
          <li>
            <Link to="/attractions">
              Attractions
            </Link>
          </li>
          <li>
            <Link to="/lodging">
              Lodging
            </Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}

export default App;
