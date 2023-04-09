import styles from '@/styles/Game.module.css';
import Image from 'next/image';
// Components
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameHeadline from '@/components/GameHeadline';
import SelectedIngredients from '@/components/GameSelectedIngredients';
import PickIngredients from '@/components/GamePickIngredients';


export default function Game() {
    return (
        <>
            <Header
                title={'Home'}
                metaTitle={'Home'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.game__page}>
                <TopNav/>
                <GameHeadline
                            href='/home'
                            children = "Let's cook a:"
                />
                <div className={styles.selectIngredients}>
                    <div className={styles.ingredientsTypes}>
                        <div className={styles.ingredients}>
                            <SelectedIngredients
                                    src = "/images/game/uncheck.png"
                                    children = "Eggs"
                            />
                            <SelectedIngredients
                                    src = "/images/game/uncheck.png"
                                    children = "Cheese"
                            />
                        </div>
                        <div className={styles.ingredients}>
                            <SelectedIngredients
                                    src = "/images/game/uncheck.png"
                                    children = "Bread"
                            />
                            <SelectedIngredients
                                    src = "/images/game/uncheck.png"
                                    children = "Ham"
                            />
                        </div>
                    </div>                  
                </div>
                <div className={styles.containerPickIngredients}>
                    <div className={styles.ingredientsList}>
                        <div className={styles.ingredientsSections}>
                            <PickIngredients
                                    src="/images/game/ingredients/apple.png"
                                    alt="apple-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/sunny-egg.png"
                                    alt="egg-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/bowl-of-rice.jpeg"
                                    alt="bowlOfRice-img"
                            />
                        </div>
                        <div className={styles.ingredientsSections}>
                            <PickIngredients
                                    src="/images/game/ingredients/ham.jpeg"
                                    alt="ham-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/chocolate.jpeg"
                                    alt="chocolateBar-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/cheese.jpeg"
                                    alt="cheese-img"
                            />
                        </div>
                        <div className={styles.ingredientsSections}>
                            <PickIngredients
                                    src="/images/game/ingredients/drumstick.jpeg"
                                    alt="drumstick-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/bread.jpeg"
                                    alt="bread-img"
                            />
                            <PickIngredients
                                    src="/images/game/ingredients/orange.jpeg"
                                    alt="orange-img"
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.next__button}>
                    <Button                      
                        href="#"
                        backgroundColour='var(--color-emerald)'
                        colour='var(--color-white)'
                        children="Next"
                    />      
                </div>                       
            </main>
        
        </>
    )
}