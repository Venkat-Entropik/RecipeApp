import React from "react";
import { useData } from "../../context/CreateContext";
import styles from './RecipieDescription.module.css'
const RecipieDecription = () => {
  const { singleRecipie } = useData();

  console.log(singleRecipie);
  return (
    <>
      <h3 className={styles.description}>Recipe Description</h3>
      <div className={styles.details}>
        <div className={styles.detailsView}>
          <div className={styles.leftView}>
            <h3 className={styles.detailsTitle}>{singleRecipie.label}</h3>
            <h4 className={styles.ingrediants}>Ingredient</h4>
            <div>
              {singleRecipie.ingredientLines.map((item) => {
                return <p className={styles.ingrediants}>{item}</p>;
              })}
            </div>
            <a href={singleRecipie.shareAs} target="blank">
              <button className={styles.publisherBtn}>Publisher</button>
            </a>
            <a href={singleRecipie.url} target="blank">
              <button className={styles.urlBtn}>Recipe Url</button>
            </a>
          </div>
          <div className={styles.rightView}>
            <img
              className={styles.recipeImage}
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
