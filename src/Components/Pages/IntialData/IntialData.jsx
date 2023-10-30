import React,{useEffect} from 'react'
import styles from '../Home/Home.module.css'
import { useData } from '../../context/CreateContext';
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import {useNavigate} from 'react-router-dom';

const IntialData = () => {
    const navigate = useNavigate();
    const {
        recipiesStore,
        setRecipies,
        setSingleRecipie,
        liked,
        setliked
      } = useData();
    const getRecipieData = async () => {
        try {
          const response = await fetch(
            `https://api.edamam.com/search?q=biryani&app_id=85870dd0&app_key=a1bd0d1c1f97338b50e67e0484a42027`
          );
          const jsonData = await response.json();
          setRecipies(jsonData?.hits);
        
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
        getRecipieData()
      },[])
      
      const handledetails = (index) => {
        setSingleRecipie(recipiesStore[index].recipe);
        navigate("/details");
      };
    
  return (
    <div className={styles.recipieContaner}>
    {recipiesStore.map((recipies, idx) => {
      return (
        <div className={styles.card}>
          <div className={styles.recipieImg}>
            <img className={styles.food} src={recipies.recipe.image} alt={recipies.recipe.label} />
            <div className={styles.cardBody}>
              {liked.some((item) => {
                return item.recipe.label == recipies.recipe.label;
              }) ? (
                <button
                  className={styles.favIcon}
                  onClick={() => {
                    var data = liked.filter((item) => {
                      return item.recipe.label !== recipies.recipe.label;
                    });
                    setliked(data);
                  }}
                >
                  <FavoriteIcon />
                </button>
              ) : (
                <button
                  className={styles.favIcon}
                  onClick={() => {
                    setliked([...liked, recipies]);
                  }}
                >
                  <FavoriteBorderIcon />
                </button>
              )}
            </div>
            <div className={styles.minutesButton}>
              <p>
                <TimelapseIcon /> {recipies.recipe.totalTime} Min
              </p>
            </div>
          </div>
          <div className={styles.cardBody}>
            <div>
              <h4 className={styles.textSecondary}>
                {recipies?.recipe?.label?.slice(0, 20)}
              </h4>
            </div>
            <div>
              <button
                className={styles.infoBtn}
                onClick={() => handledetails(idx)}
              >
                Read more
              </button>
            </div>
          </div>
        </div>
      );
    })}
  </div>
  )
}

export default IntialData