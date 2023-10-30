import React from "react";
import styles from './Openingpage.module.css'
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
const OpeningPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div className={styles.openingPage}>
      <div>
        <h1 className={styles.openingPageTitle}>
          Welcome back !!!
          <br />
          Food lovers
        </h1>
        <button onClick={handleClick} className={styles.openingPageBtn}>
          Find Your Favorite Food <FavoriteIcon />
        </button>
      </div>
    </div>
  );
};
export default OpeningPage;
