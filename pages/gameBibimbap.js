import styles from '@/styles/GameBibimbap.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import Button from '@/components/Button';
import NavBar from '@/components/NavBar';
import GameTutorial from '@/components/GameTutorial';

// Hook
import displayTutorial from '@/hooks/showTutorial';
import getBibimbapIngredients from '@/hooks/getBibimbapIngredients';
import useCheckList from '@/hooks/checkList';
import answerPoint from '@/hooks/answerPoint';
import countingLife from '@/hooks/countingLife';
import getAllEffects from '@/hooks/getAllEffects';

export default function gameBibimbap() {    
    const {showTutorial, setShowTutorial} = displayTutorial();
    const {clickSound, correctSound, incorrectSound, cook, pointsSound} = getAllEffects();

    const Next = (stages) => {
        let steps = document.getElementsByClassName("game");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(stages).style.display = "block";
    }

    // Stage 1
    const {data, setData, rightAnswer} = getBibimbapIngredients();
    const {checked, setChecked} = useCheckList();
    const {point, add} = answerPoint();
    const {lives, deductLives} = countingLife();
    
    const exitGame = () => {
        document.getElementById("exitGame").style.display = "flex";
        clickSound();
    }

    const closeExitGame = () => {
        document.getElementById("exitGame").style.display = "none";
        clickSound();
    }

    const CheckIngredient = (name) => {
        setChecked(current => [...current, name]);
        let imageClicked = false;

        checked.forEach((food) => {
            if (food.toLowerCase() == name.toLowerCase()) {
                imageClicked = true;
            }
        })

        if (!imageClicked) {
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
                    document.getElementById(name).style.border = "2px solid var(--color-emerald)";
                    document.getElementById(name).style.backgroundColor = "var(--color-avocado)";
                    document.getElementById(ingredientName).style.textDecoration = "line-through";
                    
                    if(point == 4) {
                        document.getElementById('nextButton').style.visibility = "visible";
                    }
                } else {
                    deductLives();
                    incorrectSound();
                    document.getElementById(name).style.border = "2px solid var(--color-orange)";
                    document.getElementById(name).style.backgroundColor = "var(--color-red)";
                    
                    if(lives === 1) {
                        document.getElementById("gameOver").style.display = "flex";
                    }
                }
            }
        }
    }

    // Stage 2
    const mixIngredients = () => {
        cook();
        document.getElementById("rice_bowl").classList.add("GameBibimbap_stageTwoImagesRiceAnimated__J0iQA");   
        document.getElementById("ground_beef").classList.add("GameBibimbap_stageTwoImagesBeefAnimated__DWAN5"); 
        document.getElementById("vegetables").classList.add("GameBibimbap_stageTwoImagesVeggiesAnimated__LCPVE");
        document.getElementById("sunny_egg").classList.add("GameBibimbap_stageTwoImagesEggAnimated__huV1n"); 
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
                title={'Bibimbap Game'}
                metaTitle={'Bibimbap Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.playGame__page}>
                {/* Exit Game */}
                <div id='exitGame' className={styles.exitGame} style={{display:"none"}}>
                    <div className={styles.exitGameDisplay}>
                        <div className={styles.exitGameInfo}>
                            <h1>Quit Game</h1>
                            <p>Are you sure you want to exit the game?</p>
                            <Image
                                className={styles.sadMascot}
                                src = "/images/game/mascot-question.svg"
                                alt = "sad-strawberry"
                                width="250"
                                height="250"
                                style={{marginTop: "20px"}}
                            />
                            <div className={styles.exitGameOptions}>
                                <button className={styles.exitGameButton} onClick={() => closeExitGame()}>NO</button>
                                <Link href="/game" className={styles.exitGameLink} onClick={() => clickSound()}>YES</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Game Over (modal box) */}
                <div id='gameOver' className={styles.gameOver} style={{display:"none"}}>
                    <div className={styles.gameOverDisplay}>
                        <div className={styles.gameOverDesc}>
                            <h1>Game Over</h1>
                            <p>Oh no! You did not pick the right ingredients</p>
                            <h3>Play Again?</h3>
                            <Image
                                className={styles.sadMascot}
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
                    <div id="stageOne" className="game" style={{display:"block"}}>
                        <div className={styles.gameLayout}>
                            <div className={styles.navBar}>
                                <div className={styles.navBarOption}>
                                    <div className={styles.backLink} onClick={() => exitGame()}><i className="fa fa-angle-left"></i> Back</div>
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
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <div className={styles.containerPickIngredients}>
                                <div className={styles.ingredientsList}>
                                    {data && data.map((info, index) => {
                                        return (
                                            <div className={styles.ingredientsSections} key={index}>
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
                                            <p key={index} id={rightAnswer[index].toLowerCase() + "_text"}>{rightAnswer[index]}</p>
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
                    <div id="stageTwo" className="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutSecondStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Let's make:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <div>                          
                                <Image
                                    id="rice_bowl" 
                                    className={`${styles.stageTwoImages} ${styles.stageTwoImagesRice}`}
                                    src="/images/game/ingredients/bibimbap/rice.png"
                                    alt="rice"
                                    width={120}
                                    height={120}
                                />
                                <Image
                                    id="ground_beef"
                                    className={`${styles.stageTwoImages} ${styles.stageTwoImagesBeef}`}
                                    src="/images/game/ingredients/bibimbap/ground_beef.png"
                                    alt="beef"
                                    width={120}
                                    height={120}
                                />
                                <Image
                                    id="sunny_egg"
                                    className={`${styles.stageTwoImages} ${styles.stageTwoImagesEgg}`}
                                    src="/images/game/ingredients/bibimbap/sunny-egg.png"
                                    alt="egg"
                                    width={120}
                                    height={120}
                                />
                                <Image
                                    id="vegetables"
                                    className={`${styles.stageTwoImages} ${styles.stageTwoImagesVeggies}`}
                                    src="/images/game/ingredients/bibimbap/veggies.png"
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
                    <div id="stageThree" className="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutThirdStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Well done! You made:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
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
                                    src="/images/game/bibimbap.png"
                                    alt="bibimbap"
                                    width="350"
                                    height="320"
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
                {/* {playMusic &&
                    <GameMusic/>
                }           */}
            </main>  
            <NavBar style={{position:"inherit"}}/>     
        </>
    )
}