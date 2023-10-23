import React from "react";
import { useData } from "../../context/CreateContext";
import "./recipiedetails.css";
const RecipieDecription = () => {
  const { singleRecipie } = useData();

  console.log(singleRecipie);
  return (
    <>
      <h3 className="text-danger text-center mt-2">Recipe Description</h3>
      <div className="details container border rounded mt-3 p-2">
        <div className="detailsView">
          <div className="leftView">
            <h3 className="detailsTitle text-primary">{singleRecipie.label}</h3>
            <h4 className="ingridients text-secondary">Ingredient</h4>
            <div className="ingridiantsContainer">
              {singleRecipie.ingredientLines.map((item) => {
                return <p className="ingrediants text-dark">{item}</p>;
              })}
            </div>
            <a href={singleRecipie.shareAs} target="blank">
              <button className="btn btn-primary">Publisher</button>
            </a>
            <a href={singleRecipie.url} target="blank">
              <button className="btn btn-secondary mx-2">Recipe Url</button>
            </a>
          </div>
          <div className="rightView">
            <img
              className="recipeImage"
              src={singleRecipie.image}
              alt={singleRecipie.label}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default RecipieDecription;
