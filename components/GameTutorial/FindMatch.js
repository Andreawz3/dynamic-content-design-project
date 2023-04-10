import styles from "./GameTutorial.module.css"
import Image from "next/image";
// Components
import SelectedIngredients from '@/components/GameSelectedIngredients';

export default function FindMacth(){
    return (
        <>
            <div className={styles.modalBox}>
                <div className={styles.gameToturial}>
                    <h1 className={styles.headline}>Find the Match!</h1>
                    <div>
                        <div className={styles.findIngredientSample}>
                            <div className={styles.ingredient_image_sample}>
                                <Image
                                    src = "/images/game/wrong.png"
                                    alt="wrong"
                                    width="30"
                                    height="30"
                                />
                                <Image
                                    src = "/images/game/ingredients/tomato.jpeg"
                                    alt="tomato"
                                    width="80"
                                    height="80"
                                />
                                
                            </div>
                            <i class="fa fa-long-arrow-right"></i>
                            <SelectedIngredients
                                    src = "/images/game/uncheck.png"
                                    children = "Carrot"
                            />
                        </div>
                        <div>
                            <div>
                                <Image
                                    src = "/images/game/ingredients/carrot.jpeg"
                                    alt="carrot"
                                    width="80"
                                    height="80"
                                />
                                <Image
                                    src = "/images/game/correct.png"
                                    alt="wrong"
                                    width="30"
                                    height="30"
                                />
                            </div>
                            
                            <i class="fa fa-long-arrow-right"></i>
                            <SelectedIngredients
                                    src = "/images/game/check.png"
                                    children = "Carrot"
                            />
                        </div>
                    </div>    
                    <p>
                        Click on the correct image to find the right ingredient
                    </p>
                </div>
            </div>
        </>
    )
}