import styles from '@/styles/Game.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameTutorial from '@/components/GameTutorial';
import SelectedIngredients from '@/components/GameSelectedIngredients';
import NavBar from '@/components/NavBar';

// Hooks
import displayTutorial from '@/hooks/showTutorial';
import gameIngredients from '@/hooks/gameIngredients';

export default function Game() {
    const correctAnswer = ["Rice", "Veggies", "Egg", "Ground Beef"]
    const {showTutorial, setShowTutorial} = displayTutorial();
    const Next = (stages) => {
        let steps = document.getElementsByClassName("game");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(stages).style.display = "block";
    }

    // Stage 1
    const {data, setData} = gameIngredients();

    // Stage 2
    const mixIngredients = () => {
        document.getElementById("rice").classList.add("Game_stageTwoImagesRiceAnimated___Sjv_");   
        document.getElementById("beef").classList.add("Game_stageTwoImagesBeefAnimated__7i0th"); 
        document.getElementById("vegetables").classList.add("Game_stageTwoImagesVeggiesAnimated__JnJ9y");
        document.getElementById("egg").classList.add("Game_stageTwoImagesEggAnimated__SPSlG"); 
    }

    // Stage 3
    const goBackGameStageOne = () => {
        document.getElementById("game_over").style.display = "none"
        document.getElementById("stageOne").style.display = "block";
        document.getElementById("stageThree").style.display = "none";
        document.getElementById("rice").classList.remove("Game_stageTwoImagesRiceAnimated___Sjv_");   
        document.getElementById("beef").classList.remove("Game_stageTwoImagesBeefAnimated__7i0th"); 
        document.getElementById("vegetables").classList.remove("Game_stageTwoImagesVeggiesAnimated__JnJ9y");
        document.getElementById("egg").classList.remove("Game_stageTwoImagesEggAnimated__SPSlG"); 
    }

    return (
        <>
            <Header
                title={'Game'}
                metaTitle={'Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.game__page}>
                {/* Tutorial (modal box) */}
                <div id='game-tutorial' className={styles.game_tutorial}>
                    <GameTutorial/>
                </div>
                {/* Game Over (modal box) */}
                <div id='game_over' className={styles.gameOver} style={{display:"none"}}>
                    <div className={styles.gameOverDisplay}>
                        <div className={styles.gameOverDesc}>
                            <h1>Game Over</h1>
                            <p>Oh no! You did not pick the right ingredients</p>
                            <h3>Play Again?</h3>
                            <Image
                                src = "/images/game/sad-strawberry.png"
                                alt = "sad-strawberry"
                                width="200"
                                height="200"
                            />
                            <div className={styles.goOptions}>
                                <div className={styles.playerSelection} onClick={() => goBackGameStageOne()}>
                                    <p>YES</p>
                                    <Image
                                        src = "/images/game/correct.png"
                                        alt = "sad-strawberry"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                                <div className={styles.playerSelection}>
                                    <p>NO</p>
                                    <Image
                                        src = "/images/game/wrong.png"
                                        alt = "sad-strawberry"
                                        width="50"
                                        height="50"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
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
                                        onClick={() => setShowTutorial(true)}
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
                                    {data && data.map((info, index) => {
                                        return (
                                            <div className={styles.ingredientsSections}>
                                                <Image
                                                    className={styles.ingredientImages}
                                                    src={info.image}
                                                    alt={info.alt}
                                                    width={80}
                                                    height={80}
                                                />
                                            </div>
                                        )
                                    })}
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
                    {/* stage 2 */}
                    <div id="stageTwo" class="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutSecondStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Let's made:</p>
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
                        <div style={{position:"absolute", bottom:"100px", cursor:"pointer"}}>
                            <p onClick={() => Next("stageThree")}>
                                Stage 3
                            </p>
                        </div>
                    </div>
                    {/* Stage 3 */}
                    <div  id="stageThree" class="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutThirdStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Well done! You made:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <Image
                                src="/images/game/bibimbap.png"
                                alt="bibimbap"
                                width="320"
                                height="270"
                            />
                            <div className={styles.thirdStageOptions}>
                                <Link href="#" className={styles.thirdStageOptionDisplay} onClick={() => goBackGameStageOne()}> 
                                    <Image
                                        src="/images/game/chef-hat.png"
                                        alt="chef-hat"
                                        width="80"
                                        height="80"
                                    />
                                    <p>Play again</p>
                                </Link>
                                <Link href="/mealRecipe" className={styles.thirdStageOptionDisplay}> 
                                    <Image
                                        src="/images/game/cutlery.png"
                                        alt="cutlery"
                                        width="80"
                                        height="80"
                                    />
                                    <p>Back to Recipe</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div>
                        <NavBar style={{position:"inherit"}}/>
                    </div>                   
                </div>  
                {/* Win */}
                <div id='cleared' className={styles.cleared} style={{display:"none"}}>
                    <div className={styles.clearedDisplay}>
                        <div className={styles.clearedDesc}>
                        <h1>Cleared</h1>
                            <p>Congratulations, you're a culinary master!</p>
                            <h3>You earned 200 points</h3>
                            <Image
                                src = "/images/game/mascot.png"
                                alt = "sad-strawberry"
                                width="250"
                                height="250"
                            />
                            <div className={styles.next__button} onClick={() => Next("stageTwo")}>
                                <Button                      
                                    href="/profile"
                                    backgroundColour='var(--color-yellow)'
                                    colour='var(--color-black)'
                                    children="COLLECT POINTS"
                                />      
                            </div> 
                        </div>
                    </div>
                </div>
                {showTutorial &&
                    <GameTutorial/>
                }                     
            </main>       
        </>
    )
}