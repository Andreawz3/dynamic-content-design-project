import Image from "next/image";
import Link from "next/link";
// components
import Header from "@/components/Header";
import styles from "@/styles/MealRecipe.module.css";
import NavBar from "@/components/NavBar";
import NavMenu from "@/components/NavMenu";
import Logo from "@/components/Logo";
import TopNav from "@/components/TopNav";
import RecipeSwitchButton from "@/components/RecipeSwitchButton";
import NutritionDetails from "@/components/NutritionDetails";
// import NutritionButton from "@/components/NutritionButton";
// import NutritionChart from "@/components/NutritionChart";

import { inventory } from "@/data/recipes";
import { useState } from "react";


//hooks
import useNavMenu from '@/hooks/navmenu';
import useRecipeSwitch from "@/hooks/recipeSwitch";
import showNutritionDetails from "@/hooks/nutritionDetails";


export default function MealRecipe() {
  const {showMenu, setShowMenu} = useNavMenu();
  const recipeData = inventory.recipe;
  const {showNutrition, setShowNutrition} = showNutritionDetails();
  // console.log(recipeData[1]);

  const { op, showIngredientList,showDirections } = useRecipeSwitch();

  return (
    <>
      <Header 
      title="Meal Recipe" 
      metaTitle="Meal Recipe" 
      />
     
      <main className={styles.main__meal_recipe_content}>
        <TopNav openMenu={() => setShowMenu(true)} />
        <div className={styles.scroll__container}>
          <div className={styles.top__section}>
            <div className={styles.back__button}>
              <Link href="/">
                <Image
                  src={"/icons/recipe/back-icon.svg"}
                  alt={"back-icon"}
                  width={20}
                  height={17}
                />
              </Link>
              <Link href="/">
                <p className={styles.back__text}>Back</p>
              </Link>
            </div>
            <div className={styles.nutrition__link}>
              <Link 
                href="#" 
                className={styles.nutrition__button_container}
                onClick={() => setShowNutrition(true)}
              > 
                      NUTRITION DETAILS
                      <Image
                        className={styles.apple__icon}
                        src={"/icons/recipe/apple.svg"}
                        alt={"apple-icon"}
                        height={20}
                        width={20}
                      />
              </Link> 
            </div>
              
          </div>
          <div className={styles.meal__details_container}>
            <div className={styles.meal__image_container}>
              <Image
                src={"/images/recipe-images/bibimbap.jpg"}
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
          </div>
          <div className={styles.recipe__container}>
            <div className={styles.recipe__header_container}>
              <h1>{recipeData[1].dishName}</h1>
            </div>
            <RecipeSwitchButton/>
          </div>
        </div>
      {showNutrition &&
        <NutritionDetails closeMenu={() => setShowNutrition(false)}/>
      }
      </main>
      <NavBar />
      {showMenu && 
        <NavMenu closeMenu={() => setShowMenu(false)}/>
      }
    </>
  );
}
