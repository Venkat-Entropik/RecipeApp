import React from "react";
import { useData } from "../../context/CreateContext";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { useNavigate } from "react-router-dom";

const FavoriteFood = () => {
  const navigate = useNavigate();
  const { liked, setliked } = useData();

  return (
    <div className="container border rounded home mt-3 p-3">
      <div className="recipieContaner">
        {liked.length === 0 ? (
          <div>
            <h3 className="text-center text-danger">No Favorite Foods !!!</h3>
          </div>
        ) : (
          liked.map((recipies, idx) => {
            return (
              <div className="card" style={{ width: "300px" }}>
                <div className="card-img-top recipieImg">
                  <img
                    src={recipies.recipe.image}
                    alt={recipies.recipe.label}
                  />
                  <div className="like-btn">
                    {liked.some((item) => {
                      return item.recipe.label == recipies.recipe.label;
                    }) ? (
                      <button
                        className="favIcon"
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
                        className="favIcon"
                        onClick={() => {
                          setliked([...liked, recipies]);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </button>
                    )}
                  </div>
                  <div className="minutes-button">
                    <p>
                      <TimelapseIcon /> {recipies.recipe.totalTime} Min
                    </p>
                  </div>
                </div>
                <div className="card-body">
                  <div className="card-title">
                    <h4 className="text-secondary">
                      {recipies?.recipe?.label?.slice(0, 20)}
                    </h4>
                  </div>
                  <div className="category">
                    {recipies?.recipe?.dietLabels.map((cate) => {
                      return <div className="category1">{cate}</div>;
                    })}
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
export default FavoriteFood;
