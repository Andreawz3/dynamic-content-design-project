import styles from '@/styles/GameMandu.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameTutorial from '@/components/GameTutorial';
import NavBar from '@/components/NavBar';

// Hooks
import displayTutorial from '@/hooks/showTutorial';
import getManduIngredients from '@/hooks/getManduIngredients';
import checkClick from '@/hooks/isClicked';
import answerPoint from '@/hooks/answerPoint';
import countingLife from '@/hooks/countingLife';
import getAllEffects from '@/hooks/getAllEffects';

export default function gameMandu() {
    const {showTutorial, setShowTutorial} = displayTutorial();
    
    const Next = (stages) => {
        let steps = document.getElementsByClassName("game");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(stages).style.display = "block";
    }

     // Stage 1
     const {data, setData, rightAnswer} = getManduIngredients();
     const {checkIngredientClick, ingredientDataName} = checkClick();
     const {point, add} = answerPoint();
     const {lives, deductLives} = countingLife();
     const {correctSound, incorrectSound, cook, pointsSound} = getAllEffects();
 
     const CheckIngredient = (name) => {
         if(point <= 4) {
             let isRightAnswer = false;
             rightAnswer.forEach((answer) => {
                 if (answer.toLowerCase() == name.toLowerCase()) {
                     isRightAnswer = true;
                 }
             })
             if (isRightAnswer) {
                 correctSound();
                 add();
                 let ingredientName = name + "_text";
                 document.getElementById(name).style.border = "2px solid var(--color-avocado)";
                 document.getElementById(name).style.backgroundColor = "var(--color-avocado)";
                 document.getElementById(ingredientName).style.textDecoration = "line-through";
                 
                 if(point == 4) {
                     document.getElementById('nextButton').style.visibility = "visible";
                 }
             } else {
                 deductLives();
                 incorrectSound();
                 document.getElementById(name).style.border = "2px solid var(--color-red)";
                 document.getElementById(name).style.backgroundColor = "var(--color-red)";
                 
                 if(lives === 1) {
                     document.getElementById("gameOver").style.display = "flex";
                 }
             }
         }
     }
 
     // Stage 2
     const mixIngredients = () => {
         cook();
         document.getElementById("soy-sauce").classList.add("GameMandu_stageTwoImagesSoySauceAnimated__xO5_M");   
         document.getElementById("ground_meat").classList.add("GameMandu_stageTwoImagesMeatAnimated__2d0NZ"); 
         document.getElementById("wrapper").classList.add("GameMandu_stageTwoImagesWrappersAnimated__BuizY"); 
         document.getElementById("vegetables").classList.add("GameMandu_stageTwoImagesVeggiesAnimated__nX4O7"); 
         setTimeout(() => {
             document.getElementById("collectPoints").style.display = "flex";
         }, 1300)
     }
 
     const collectPoints = () => {
         pointsSound();
         setTimeout(() => {
             document.getElementById("stageThree").style.display = "block";
             document.getElementById("stageTwo").style.display = "none";
             document.getElementById("collectPoints").style.display = "none";
             
         },1000);  
     }
     
    return (
        <>
        <Header
            title={'Mandu Game'}
            metaTitle={'Mandu Game'}
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <main className={styles.playGame__page}>
            {/* Game Over (modal box) */}
            <div id='gameOver' className={styles.gameOver} style={{display:"none"}}>
                <div className={styles.gameOverDisplay}>
                    <div className={styles.gameOverDesc}>
                        <h1>Game Over</h1>
                        <p>Oh no! You did not pick the right ingredients</p>
                        <h3>Play Again?</h3>
                        <Image
                            src = "/images/game/mascot-sad.svg"
                            alt = "sad-strawberry"
                            width="200"
                            height="200"
                        />
                        <div className={styles.goOptions}>
                            <div className={styles.playerSelection} onClick={() => {window.location.reload()}}>
                                <p>YES</p>
                                <Image
                                    src = "/images/game/selected.png"
                                    alt = "check"
                                    width="50"
                                    height="50"
                                />
                            </div>
                            <Link href='/game' className={styles.playerSelection}>
                                <p>NO</p>
                                <Image
                                    src = "/images/game/wrong.png"
                                    alt = "x-icon"
                                    width="50"
                                    height="50"
                                />
                            </Link>       
                        </div>
                    </div>
                </div>
            </div>
            {/* Play Game */}
            <div className={styles.game_container}>
                {/* Stage 1 */}
                <div id="stageOne" class="game" style={{display:"block"}}>
                    <div className={styles.gameLayout}>
                        <div className={styles.navBar}>
                            <div className={styles.navBarOption}>
                                <Link href='/game'><i class="fa fa-angle-left"></i> Back</Link>
                                <div className={styles.gameOptiones}>
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
                                    <div>
                                        <Image
                                            src = "/images/game/heart.png"
                                            alt = "heart-strawberry"
                                            width="50"
                                            height="50"
                                        />  
                                        <p className={styles.gameLife}>{lives}</p>  
                                    </div>      
                                </div>                                       
                            </div>                   
                        </div>
                        <div className={styles.headlines}>
                            <p className={styles.subHealine}>Pick your ingredients for:</p>
                            <h1 className={styles.mainHeadline}>Mandu</h1>
                        </div>
                        <div className={styles.containerPickIngredients}>
                            <div className={styles.ingredientsList}>
                                {data && data.map((info, index) => {
                                    return (
                                        <div className={styles.ingredientsSections}>
                                            <Image
                                                id={info.name}
                                                className={styles.ingredientImages}
                                                src={info.image}
                                                alt={info.name}
                                                width={80}
                                                height={80}
                                                onClick={() => CheckIngredient(info.name)}
                                            />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={styles.selectIngredients}>
                            <div className={styles.ingredientsTypes}>
                                {rightAnswer.map((info, index) => {
                                    return (
                                        <p id={rightAnswer[index].toLowerCase() + "_text"}>{rightAnswer[index]}</p>
                                    )
                                })}
                            </div>                  
                        </div>
                        <div 
                            id='nextButton'
                            className={styles.next__button} 
                            onClick={() => Next("stageTwo")}
                            style={{visibility:"hidden"}} 
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
                            <h1 className={styles.mainHeadline}>Mandu</h1>
                        </div>
                        <div>                          
                            <Image
                                id="soy-sauce" 
                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesSoySauce}`}
                                src="/images/game/ingredients/mandu/soy-sauce.png"
                                alt="soy-sauce"
                                width={120}
                                height={120}
                            />
                            <Image
                                id="ground_meat"
                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesMeat}`}
                                src="/images/game/ingredients/mandu/ground_meat.png"
                                alt="meat"
                                width={120}
                                height={120}
                            />
                            <Image
                                id="wrapper"
                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesWrappers}`}
                                src="/images/game/ingredients/mandu/wrappers.png"
                                alt="wrappers"
                                width={120}
                                height={120}
                            />
                            <Image
                                id="vegetables"
                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesVeggies}`}
                                src="/images/game/ingredients/mandu/veggies.png"
                                alt="vegetables"
                                width={120}
                                height={120}
                            />
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
                {/* Stage 3 */}
                <div  id="stageThree" class="game" style={{display:"none"}}>
                    <div className={`${styles.gameLayout} ${styles.gameLayoutThirdStage}`}>
                        <div className={styles.headlines}>
                            <p className={styles.subHealine}>Well done! You made:</p>
                            <h1 className={styles.mainHeadline}>Mandu</h1>
                        </div>
                        <div className={styles.thirdStageImages}>
                            <Image
                                className={styles.blingLeft}
                                src="/images/game/bling.png"
                                alt="bling"
                                width="50"
                                height="50"
                            />
                            <Image
                                className={styles.thirdStageImg}
                                src="/images/game/mandu.png"
                                alt="mandu"
                                width="320"
                                height="180"
                            />
                            <Image
                                className={styles.blingRight}
                                src="/images/game/bling.png"
                                alt="bling"
                                width="50"
                                height="50"
                            />
                        </div>
                        
                        <div className={styles.thirdStageOptions}>
                            <div className={styles.thirdStageOptionDisplay} onClick={() => {window.location.reload()}}> 
                                <Image
                                    src="/images/game/chef-hat.png"
                                    alt="chef-hat"
                                    width="80"
                                    height="80"
                                />
                                <p>Play again</p>
                            </div>
                            <Link href="/game" className={styles.thirdStageOptionDisplay}> 
                                <Image
                                    src="/images/game/cutlery.png"
                                    alt="cutlery"
                                    width="80"
                                    height="80"
                                />
                                <p>Exit Game</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>  
            {/* Win */}
            <div id='collectPoints' className={styles.cleared} style={{display:"none"}}>
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
                        <div className={styles.next__button} onClick={() => collectPoints()}>
                            <Button                      
                                href=""
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
        <NavBar style={{position:"inherit"}}/>     
    </>
    )
}