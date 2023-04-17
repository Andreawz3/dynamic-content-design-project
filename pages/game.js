import styles from '@/styles/Game.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

// Components
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameTutorial from '@/components/GameTutorial';
import SelectedIngredients from '@/components/GameSelectedIngredients';
import PickIngredients from '@/components/GamePickIngredients';
import NavBar from '@/components/NavBar';

export default function Game() {
    const correctAnswer = ["Rice", "Veggies", "Egg", "Ground Beef"]

    // Tutotial (modal box)
    const showModalBox = () =>  {
        const tutorial = document.getElementById('game-tutorial');
        tutorial.style.display = 'contents';
    }

    // Stage 1
    const pickIngredient = () => {
        // document.getElementsByClassName("ingredient")[0].style.border = "2px solid #5A8C32"; // it works

        // let ingredients = document.getElementsByClassName("ingredient")

        // for(let i = 0; i <ingredients.length; i++){
        //     ingredients[i].style.border = "2px solid #5A8C32";
        // }
    }

    const Next = (stages) => {
        let steps = document.getElementsByClassName("game");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(stages).style.display = "block";
    }

    // Stage 2

    const mixIngredients = () => {
        document.getElementById("rice").classList.add("Game_stageTwoImagesRiceAnimated___Sjv_");   
        document.getElementById("beef").classList.add("Game_stageTwoImagesBeefAnimated__7i0th"); 
        document.getElementById("vegetables").classList.add("Game_stageTwoImagesVeggiesAnimated__JnJ9y");
        document.getElementById("egg").classList.add("Game_stageTwoImagesEggAnimated__SPSlG"); 
    }

    return (
        <>
            <Header
                title={'Game'}
                metaTitle={'Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.game__page}>
                <div id='game-tutorial' className={styles.game_tutorial}
                    // style={{display:"none"}}>
                    >
                    <GameTutorial/>
                </div>
                <div className={styles.game_container}>
                    {/* Stage 1 */}
                    <div id="stageOne" class="game" style={{display:"block"}}>
                        <div className={styles.gameLayout}>
                            <div className={styles.navBar}>
                                <div className={styles.navBarOption}>
                                    <Link href='/home'><i class="fa fa-angle-left"></i> Back</Link>
                                    <div className={styles.seeTutorial}>
                                        <Image
                                            src = "/images/game/idea_icon.png"
                                            alt = "idea-icon"
                                            width="20"
                                            height="20"
                                        />
                                        <Link 
                                        className={styles.seeTutorialText}
                                        id='watch__tutorial' 
                                        href="#" 
                                        onClick={() => showModalBox()}
                                        >SEE TUTORIAL</Link>
                                    </div>                                
                                </div>                   
                            </div>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Pick your ingredients for:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <div className={styles.selectIngredients}>
                                <div className={styles.ingredientsTypes}>
                                    <div className={styles.ingredients}>
                                        <SelectedIngredients
                                                src = "/images/game/uncheck.png"
                                                children = {correctAnswer[0]}
                                        />
                                        <SelectedIngredients
                                                src = "/images/game/uncheck.png"
                                                children = {correctAnswer[1]}
                                        />
                                    </div>
                                    <div className={styles.ingredients}>
                                        <SelectedIngredients
                                                src = "/images/game/uncheck.png"
                                                children = {correctAnswer[2]}
                                        />
                                        <SelectedIngredients
                                                src = "/images/game/uncheck.png"
                                                children = {correctAnswer[3]}
                                        />
                                    </div>
                                </div>                  
                            </div>
                            <div className={styles.containerPickIngredients}>
                                <div className={styles.ingredientsList}>
                                    <div className={styles.ingredientsSections}>
                                        <div id='apple' class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/apple.png"
                                                    alt="apple"
                                                />
                                            </div>
                                        </div>
                                        <div id="veggies" class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                        src="/images/game/ingredients/veggies.png"
                                                        alt="veggies"
                                                />
                                            </div>
                                        </div>    
                                        <div id="cheese" class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/cheese.jpeg"
                                                    alt="cheese"
                                                />
                                            </div>
                                        </div>    
                                    </div>
                                    <div className={styles.ingredientsSections}>
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/sunny-egg.png"
                                                    alt="ham"
                                                />
                                            </div>
                                        </div>    
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/drumstick.jpeg"
                                                    alt="chocolateBar"
                                                />
                                            </div>
                                        </div>
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/ground_beef.png"
                                                    alt="cheese"
                                                />
                                            </div>
                                        </div>    
                                    </div>
                                    <div className={styles.ingredientsSections}>
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/chocolate.jpeg"
                                                    alt="drumstick"
                                                />
                                            </div>
                                        </div>    
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/rice.png"
                                                    alt="bread"
                                                />
                                            </div>
                                        </div>    
                                        <div class='ingredient' onClick={() => pickIngredient()}>
                                            <div className={styles.ingredientImages}>
                                                <PickIngredients
                                                    src="/images/game/ingredients/orange.jpeg"
                                                    alt="orange"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.next__button} onClick={() => Next("stageTwo")}
                                // style={{visibility:"hidden"}}
                            >
                                <Button                      
                                    href="#"
                                    backgroundColour='var(--color-emerald)'
                                    colour='var(--color-white)'
                                    children="Next"
                                />      
                            </div>                       
                        </div>
                    </div>
                    <div id="stageTwo" class="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutSecondStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Let's made a:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <div>
                                <div>
                                    <Image
                                        id="rice"
                                        className={`${styles.stageTwoImages} ${styles.stageTwoImagesRice}`}
                                        src="/images/game/ingredients/rice.png"
                                        alt="rice"
                                        width="150"
                                        height="150"
                                    />
                                    <Image
                                        id="beef"
                                        className={`${styles.stageTwoImages} ${styles.stageTwoImagesBeef}`}
                                        src="/images/game/ingredients/ground_beef.png"
                                        alt="beef"
                                        width="150"
                                        height="150"
                                    />
                                </div>
                                <div>
                                    <Image
                                        id="vegetables"
                                        className={`${styles.stageTwoImages} ${styles.stageTwoImagesVeggies}`}
                                        src="/images/game/ingredients/veggies.png"
                                        alt="veggies"
                                        width="150"
                                        height="150"
                                    />
                                    <Image
                                        id="egg"
                                        className={`${styles.stageTwoImages} ${styles.stageTwoImagesEgg}`}
                                        src="/images/game/ingredients/sunny-egg.png"
                                        alt="egg"
                                        width="150"
                                        height="150"
                                    />
                                </div>
                            </div>
                            <div id="letsCook" className={styles.letsCookButton} onClick={() => mixIngredients()}>
                                <Button                      
                                    href="#"
                                    backgroundColour='var(--color-emerald)'
                                    colour='var(--color-white)'
                                    children="Let's cook"
                                /> 
                            </div>
                            <div>
                                <Image
                                    src="/images/game/bowl.png"
                                    alt="bowl"
                                    width="300"
                                    height="150"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavBar style={{position:"inherit"}}/>
                    </div>
                </div>                       
            </main>       
        </>
    )
}