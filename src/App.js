import Home from "./Components/Pages/Home/Home";
import NavBar from "./Components/Pages/NavBar.jsx/NavBar";
import OpeningPage from "./Components/Pages/OpeningPage/OpeningPage";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import CreateContext from "./Components/context/CreateContext";
import RecipieDecription from "./Components/Pages/RecipieDescription/RecipieDecription";
import FavoriteFood from "./Components/Pages/FavoriteFood/FavoriteFood";

export default function App() {
  return (
    <div className="App">
      <CreateContext>
        <NavBar />
        <Routes>
          <Route path="/" element={<OpeningPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/details" element={<RecipieDecription />} />
          <Route path="/fav" element={<FavoriteFood />} />
        </Routes>
      </CreateContext>
    </div>
  );
}
