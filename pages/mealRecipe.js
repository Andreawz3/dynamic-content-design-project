import Image from "next/image";
import Link from "next/link";
// components
import Header from "@/components/Header";
import styles from "@/styles/MealRecipe.module.css";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";
import TopNav from "@/components/TopNav";

import { inventory } from "@/data/recipes";
import { useState } from "react";


export default function MealRecipe() {
  const recipeData = inventory.recipe;
  console.log(recipeData[1]);

  return (
    <>
    <Header
          title='Meal Recipe'
          metaTitle='Meal Recipe'
    />
      <main className={styles.main__meal_recipe_content}>
        <TopNav/>
        <div className={styles.scroll__container}>      
            <div className={styles.top__section}>
            <div className={styles.back__button}>
                <Link href="/">
                <Image
                    src={"/icons/recipe/back-icon.svg"}
                    alt={"back-icon"}
                    width={20}
                    height={20}
                />
                </Link>
                <Link href="/">
                <p className={styles.back__text}>Back</p>
                </Link>
            </div>

            <div className={styles.nutrition__details_button}>
                <div className={styles.nutrition__details_button_text}>
                <Link href="/">
                    <p className={styles.nutrition__text}>NUTRITION DETAILS</p>
                </Link>
                <hr />
                </div>
                <Link href="/">
                <Image
                    src={"/icons/recipe/apple.svg"}
                    alt={"apple-icon"}
                    width={20}
                    height={20}
                />
                </Link>
            </div>
            </div>
            <div className={styles.meal__details_container}>
          <div className={styles.meal__image_container}>
            <Image
              src={"/images/bibimbap-img.jpeg"}
              alt={"mandu-image"}
              width={350}
              height={170}
            />
          </div>
          <div className={styles.meal__information_preview}>
            <div className={styles.cooktime}>
              <div className={styles.cooktime__icon_container}>
                <Image
                  src={"/icons/recipe/cooktime-icon.svg"}
                  alt={"cooktime-icon"}
                  width={16}
                  height={16}
                />
                <h4>{recipeData[1].cookTime}</h4>
              </div>
              <div className={styles.labels__p}>
                <p>cook time</p>
              </div>
            </div>

            <div className={styles.preptime}>
              <div className={styles.preptime__icon_container}>
                <Image
                  src={"/icons/recipe/preptime-icon.svg"}
                  alt={"preptime-icon"}
                  width={16}
                  height={16}
                />
                <h4>{recipeData[1].prepTime}</h4>
              </div>
              <div className={styles.labels__p}>
                <p>prep time</p>
              </div>
            </div>

            <div className={styles.level}>
              <div className={styles.level__h4}>
                <h4>{recipeData[1].difficulty}</h4>
              </div>
              <div className={styles.labels__p}>
                <p>level</p>
              </div>
            </div>

            <div className={styles.category}>
              <div className={styles.category__icon_container}>
                <Image
                  src={"/icons/recipe/poultry.png"}
                  alt={"chicken-icon"}
                  width={16}
                  height={16}
                />
              </div>
              <div className={styles.labels__p}>
                <p>category</p>
              </div>
            </div>

            <div className={styles.rating}>
              <div className={styles.rating__icon_container}>
                <Image
                  src={"/icons/recipe/star.svg"}
                  alt={"review-icon"}
                  width={13}
                  height={13}
                />
                <h4>4</h4>
              </div>
              <div className={styles.labels__p}>
                <p>rating</p>
              </div>
            </div>
          </div>
          <hr />
            </div>
            <div className={styles.recipe__container}>
            <div className={styles.recipe__header_container}>
                <h1>{recipeData[1].dishName}</h1>
            </div>
            <div className={styles.recipe__button_container}>
                <div className={styles.switch__button}>
                <input
                    className={styles.switch__button_checkbox}
                    type="checkbox"
                ></input>
                <label className={styles.switch__button_label} for="">
                    <span className={styles.switch__button_label_span}>
                    INGREDIENTS
                    </span>
                </label>
                </div>
            </div>
            <div className={styles.ingredients__container}>
                <div className={styles.ingredients__upper_text}>
                <div className={styles.ingredients__upper_text_p}>
                    {/* <p>5 items</p> */}
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
                        <input className={styles.checkbox} type="checkbox" />
                        <span className={styles.checkmark}></span>
                        <label className={styles.container}>
                            {value.ingredientName}
                                <span className={styles.measurement}>
                                    {value.measurementType}
                                </span>
                            </label>
                        
                    </div>
                    );
                })}
                </div>
            </div>
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
                                <h2>Step {index+1}</h2>
                                <p className={styles.directions__text}>{step}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            </div>
        </div> 
      </main> 
      <NavBar/>
    </>
  );
}
