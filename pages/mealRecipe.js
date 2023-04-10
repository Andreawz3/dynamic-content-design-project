import Image from "next/image";
import Link from "next/link";
// components
import Header from "@/components/Header";
import styles from "@/styles/MealRecipe.module.css";
import NavBar from "@/components/NavBar";
import Logo from "@/components/Logo";

export default function MealRecipe() {
  return (
    <>
      <main>
        <div className={styles.top__section}>
            <div className={styles.back__button}>
                <Link href="/">
                    <Image
                        src={"/icons/recipe/back-icon.svg"}
                        alt={"back-icon"}
                        width={20}
                        height={20}
                    />
                    <p className={styles.back__text}>Back</p>
                </Link>
            </div>

            <div className={styles.nutrition__details_button}>
                <Link href="/">
                    <p className={styles.nutrition__text}>NUTRITION DETAILS</p>
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
                src={""}
                alt={""}
                width={350}
                height={170}
                /> 
            </div>
            <div className={styles.meal__information_preview}>
                <div className={styles.cooktime}>
                    <div className={styles.cooktime__icon_container}>
                    <Image/>
                    <h4>10 MIN</h4>
                    </div>
                    <div className={styles.cooktime__p}>
                        <p>cook time</p>
                    </div>
                </div>

                <div className={styles.preptime}>
                    <div className={styles.preptime__icon_container}>
                        <Image/>
                        <h4>25 MIN</h4>
                    </div>
                    <div className={styles.preptime__p}>
                        <p>prep time</p>
                    </div>
                </div>

                <div className={styles.level}>
                    <div className={styles.level__h4}>
                        <h4>EASY</h4>
                    </div>
                    <div className={styles.level__p}>
                        <p>level</p>
                    </div>
                </div>

                <div className={styles.category}>
                    <div className={styles.category__icon_container}>
                        <Image/>
                    </div>
                    <div className={styles.category__p}>
                        <p>category</p>
                    </div>
                </div>

                <div className={styles.rating}>
                <div className={styles.rating__icon_container}>
                    <Image/>
                    <h4>4</h4>
                    </div>
                    <div className={styles.rating__p}>
                        <p>rating</p>
                    </div>
                </div>
            </div>
            <hr/>

        </div>
        <div className={styles.recipe__container}>
            <div className={styles.recipe__header_container}>
                <h1>Recipe Title</h1>
            </div>
            <div className={styles.recipe__button_container}>
                <div className={styles.switch_button}>
                    <input className={styles.switch__button_checkbox} type="checkbox"></input>
                    <label className={styles.switch__button_label} for=""><span className={styles.switch__button_label_span}>Ingredients</span></label>
                </div>
            </div>
            <div className={styles.ingredients__container}>
                <div className={styles.ingredients__upper_text}>
                    <div className={styles.ingredients__upper_text_p}>
                        <p>5 items</p>
                    </div>
                    <div className={styles.ingredients__save_to_list}>
                        <Link href="/">
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
                <label class="container">Ingredient 1
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>

                <label class="container">Ingredient 2
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>

                <label class="container">Ingredient 3
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>

                <label class="container">Ingredient 4
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>

                <label class="container">Ingredient 5
                <input type="checkbox"/>
                <span class="checkmark"></span>
                </label>

                </div>
            </div>
        </div>

      </main>
    </>
  );

        }