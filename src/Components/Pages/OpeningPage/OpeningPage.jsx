import React from "react";
import "./openingpage.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
const OpeningPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className="openingPage text-center d-flex justify-content-center align-items-center">
      <div className="openingPage-heading">
        <h1 className="text-center text-light display-4">
          Welcome back !!!
          <br />
          Food lovers
        </h1>
        <button onClick={handleClick} className="btn btn-outline-light">
          Find Your Favorite Food <FavoriteIcon />
        </button>
      </div>
    </div>
  );
};
export default OpeningPage;
