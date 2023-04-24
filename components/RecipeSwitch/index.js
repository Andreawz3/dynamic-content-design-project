import { inventory } from "@/data/recipes";
import { useState } from "react";
import useRecipeSwitch from "@/hooks/recipeSwitch";
import styles from "./RecipeSwitch.module.css";
import Link from "next/link";
import Image from "next/image";

export default function RecipeSwitch() {
    const recipeData = inventory.recipe;
    // console.log(recipeData[1]);
  
    const { op, showIngredientList,showDirections } = useRecipeSwitch();
    return(
        <>
         <div className={styles.recipe__button_container}>
              <div className={styles.switch__button}>
                <input
                  className={styles.switch__button_checkbox}
                  type="checkbox"
                  onClick={() => op()}
                ></input>
                <label className={styles.switch__button_label} for="">
                  <span className={styles.switch__button_label_span}>
                    INGREDIENTS
                  </span>
                </label>
              </div>
            </div>
            {showIngredientList && (
              <div className={styles.ingredients__container}>
                <div className={styles.ingredients__upper_text}>
                  <div className={styles.ingredients__upper_text_p}>
                    <p>5 items</p>
                  </div>
                  <div className={styles.ingredients__save_to_list}>
                    <Link href="#">
                      <p>SAVE TO LIST</p>
                      <Image
                        src={"/icons/recipe/note-icon.svg"}
                        alt={""}
                        width={18}
                        height={20}
                      />
                    </Link>
                  </div>
                </div>
                <div className={styles.ingredients__list}>
                  {recipeData[1].ingredientList.map((value, index) => {
                    return (
                      <div key={index} className={styles.ingredients}>
                        <div className={styles.checklist__container}>        
                            <input className={styles.checkbox} type="checkbox" />
                            <span className={styles.checkmark}></span>
                            <label className={styles.container}>
                            {value.ingredientName}
                            </label> 
                        </div>
                        <span className={styles.measurement}>
                            {value.measurementType}
                          </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {showDirections && (
            <div className={styles.directions__container}>
              <div className={styles.directions__upper_text}>
                <div className={styles.serving}>
                  <p>{recipeData[1].servingSize}</p>
                </div>
                <div className={styles.price}>
                  <p>{recipeData[1].price}</p>
                </div>
              </div>
              <div className={styles.directions__steps}>
                {recipeData[1].directions.map((step, index) => {
                  return (
                    <div key={index} className={styles.step__header_1}>
                      <h2 className={styles.directions_header}>Step {index + 1}</h2>
                      <p className={styles.directions__text}>{step}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            )}
        </>
    )
}