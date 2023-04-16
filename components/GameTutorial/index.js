import styles from "./GameTutorial.module.css"
import Image from "next/image"
// Components
import Button from '@/components/Button';
import SelectedIngredients from '@/components/GameSelectedIngredients';

export default function GameTutorial(){

    const Next = () => {
        const letsPlay = document.getElementById("letsPlay");
        letsPlay.style.display = 'none';
        
        const findMatch = document.getElementById("findMatch");
        findMatch.style.display = 'block';
    }

    const closeButton = () => {
        const tutorial = document.getElementById('modal-box');
        tutorial.style.display = 'none';   
    }

    return (
        <>
            <div id="modal-box" className={styles.modalBox}>
                <div className={styles.gameToturialDisplay}> 
                    {/* Let's Play */}         
                    <div id="letsPlay" className={styles.tutorial_display}>
                        <div className={styles.gameToturial}>
                            <p>At Yori, we get to play with our food!</p>
                            <h1 className={styles.headline}>Let's Play</h1>
                            <Image
                                src = "/images/game/cooking.png"
                                alt="cooking-wok"
                                width="300"
                                height="300"
                            />
                        </div>
                        <div className={styles.lets_play_next_button} onClick={() => Next()}>
                            <Button                    
                                href=""
                                backgroundColour='var(--color-emerald)'
                                colour='var(--color-white)'
                                children="Next"
                            />
                        </div>
                    </div>
                    {/* Find the Math Ingredient */}
                    <div id="findMatch" style={{display:"none"}} className={styles.tutorial_display}>
                        <div className={styles.find_match_display}>
                            <h1 className={styles.headline}>Find the Match!</h1>
                            <div className={styles.findMatchView}>
                                <div className={styles.findIngredientSample}>
                                    <div className={styles.ingredient_image_sample}>
                                        <Image
                                            className={styles.icons}
                                            src = "/images/game/wrong.png"
                                            alt="wrong"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            className={styles.wrong_ingredient}
                                            src = "/images/game/ingredients/tomato.jpeg"
                                            alt="tomato"
                                            width="80"
                                            height="80"
                                        />
                                        
                                    </div>
                                    <div className={styles.arrowIcon}>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                    <SelectedIngredients
                                            src = "/images/game/uncheck.png"
                                            children = "Carrot"
                                    />
                                </div>
                                <div className={styles.findIngredientSample}>
                                    <div className={styles.ingredient_image_sample}>
                                        <Image
                                            className={styles.icons}
                                            src = "/images/game/correct.png"
                                            alt="wrong"
                                            width="30"
                                            height="30"
                                        />
                                        <Image
                                            className={styles.correct_ingredient}
                                            src = "/images/game/ingredients/carrot.jpeg"
                                            alt="carrot"
                                            width="80"
                                            height="80"
                                        />
                                        
                                    </div>
                                    <div className={styles.arrowIcon}>
                                        <i class="fa fa-long-arrow-right"></i>
                                    </div>
                                    <SelectedIngredients
                                            src = "/images/game/check.png"
                                            children = "Carrot"
                                    />
                                </div>
                            </div>    
                            <p className={styles.findMatchPara}>
                                Click on the correct image to find the right ingredient
                            </p>
                        </div>
                        <div className={styles.find_match_next_button}>
                            <Button                    
                                href=""
                                backgroundColour='var(--color-emerald)'
                                colour='var(--color-white)'
                                children="Next"
                            />
                        </div>
                    </div>                
                </div> 
            </div>           
        </>
    )
}