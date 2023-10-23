import React, { useEffect, useState } from "react";
import "./home.css";
import SearchIcon from "@mui/icons-material/Search";
import { useData } from "../../context/CreateContext";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import TimelapseIcon from "@mui/icons-material/Timelapse";
import { useNavigate } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Home = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [submitQuery, setSubmitQuery] = useState("");

  const {
    recipiesStore,
    setRecipies,
    setSingleRecipie,
    liked,
    setliked
  } = useData();

  const handleQuery = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSubmitQuery(query);
  };

  const getRecipieData = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${submitQuery}&app_id=85870dd0&app_key=a1bd0d1c1f97338b50e67e0484a42027`
      );
      const jsonData = await response.json();
      setRecipies(jsonData?.hits);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRecipieData();
  }, [submitQuery]);

  const handledetails = (index) => {
    setSingleRecipie(recipiesStore[index].recipe);
    navigate("/details");
  };

  return (
    <div className="container border rounded home mt-3 p-3">
      <h2 className="header text-primary">
        Search Recipies With <span className="title">Food Studio</span>
      </h2>
      <form className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search Recipie"
          value={query}
          onChange={handleQuery}
        />
        <button className="input-group-text" onClick={handleSearch}>
          <SearchIcon />
        </button>
      </form>
      <div className="recipieContaner">
        {recipiesStore.map((recipies, idx) => {
          return (
            <div className="card">
              <div className="card-img-top recipieImg">
                <img src={recipies.recipe.image} alt={recipies.recipe.label} />
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
                <div className="info-btn">
                  <button
                    className="btn btn-outline-primary w-100 mt-1"
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
    </div>
  );
};
export default Home;
