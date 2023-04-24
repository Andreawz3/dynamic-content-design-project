import styles from '@/styles/GameBibimbap.module.css';
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
import getBibimbapIngredients from '@/hooks/getBibimbapIngredients';
import countingLife from '@/hooks/countingLife';
import rightEffect from '@/hooks/rightAnswer';
import wrongEffect from '@/hooks/wrongAnswerEffect';

export default function gameBibimbap() {
    const {showTutorial, setShowTutorial} = displayTutorial();
    
    
    const Next = (stages) => {
        let steps = document.getElementsByClassName("game");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(stages).style.display = "block";
    }

    // Stage 1
    const {data, setData, righttAnswer} = getBibimbapIngredients();
    const {lives, deductLives} = countingLife();
    const {playAudioRight} = rightEffect();
    const {playAudioWrong} = wrongEffect();
    const CheckIngredient = (name) => {
        if (name == "rice" ) {
            document.getElementById("rice").style.border = "2px solid var(--color-avocado)";
            document.getElementById("rice").style.backgroundColor = "var(--color-avocado)";
            playAudioRight();
        } else if (name == "beef") {
            document.getElementById("beef").style.border = "2px solid var(--color-avocado)";
            document.getElementById("beef").style.backgroundColor = "var(--color-avocado)";
            playAudioRight();
        } else if (name == "egg") {
            document.getElementById("egg").style.border = "2px solid var(--color-avocado)";
            document.getElementById("egg").style.backgroundColor = "var(--color-avocado)";
            playAudioRight();
        } else if (name == "veggies") {
            document.getElementById("veggies").style.border = "2px solid var(--color-avocado)";
            document.getElementById("veggies").style.backgroundColor = "var(--color-avocado)";
            playAudioRight();
        } else {
            document.getElementById(name).style.border = "2px solid var(--color-red)";
            document.getElementById(name).style.backgroundColor = "var(--color-red)";
            deductLives();
            playAudioWrong();
            if(lives === 1) {
                document.getElementById("gameOver").style.display = "flex";
            }
            console.log(lives)
        }
    }

    // Stage 2
    const mixIngredients = () => {
        document.getElementById("rice").classList.add("GameBibimbap_stageTwoImagesRiceAnimated__J0iQA");   
        document.getElementById("beef").classList.add("GameBibimbap_stageTwoImagesBeefAnimated__DWAN5"); 
        document.getElementById("vegetables").classList.add("GameBibimbap_stageTwoImagesVeggiesAnimated__LCPVE");
        document.getElementById("egg").classList.add("GameBibimbap_stageTwoImagesEggAnimated__huV1n"); 
    }

    // Stage 3
    const goBackGameStageOne = () => {
        document.getElementById("gameOver").style.display = "none"
        document.getElementById("stageOne").style.display = "block";
        document.getElementById("stageThree").style.display = "none";
        document.getElementById("rice").classList.remove("GameBibimbap_stageTwoImagesRiceAnimated__J0iQA");   
        document.getElementById("beef").classList.remove("GameBibimbap_stageTwoImagesBeefAnimated__DWAN5"); 
        document.getElementById("vegetables").classList.remove("GameBibimbap_stageTwoImagesVeggiesAnimated__LCPVE");
        document.getElementById("egg").classList.remove("GameBibimbap_stageTwoImagesEggAnimated__huV1n"); 
    }

    // Modal Box
    const opneGameOver = () => {
        document.getElementById("gameOver").style.display = "flex";
    }
    const opneCollectPoints = () => {
        document.getElementById("collectPoints").style.display = "flex";
    }

    return (
        <>
            <Header
                title={'Play Game'}
                metaTitle={'Play Game'}
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
                                src = "/images/game/sad-strawberry.png"
                                alt = "sad-strawberry"
                                width="200"
                                height="200"
                            />
                            <div className={styles.goOptions}>
                                <Link href="/game" className={styles.playerSelection}>
                                    <p>YES</p>
                                    <Image
                                        src = "/images/game/selected.png"
                                        alt = "check"
                                        width="50"
                                        height="50"
                                    />
                                </Link>
                                <Link href='/home' className={styles.playerSelection}>
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
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
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
                                    <div className={styles.ingredients}>
                                        <SelectedIngredients
                                                src = "/images/game/unselected.png"
                                                children = {righttAnswer[0]} 
                                        />
                                        <SelectedIngredients
                                                src = "/images/game/unselected.png"
                                                children = {righttAnswer[1]}
                                        />
                                    </div>
                                    <div className={styles.ingredients}>
                                        <SelectedIngredients
                                                src = "/images/game/unselected.png"
                                                children = {righttAnswer[2]}
                                        />
                                        <SelectedIngredients
                                                src = "/images/game/unselected.png"
                                                children = {righttAnswer[3]}
                                        />
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
                    {/* stage 2 */}
                    <div id="stageTwo" class="game" style={{display:"none"}}>
                        <div className={`${styles.gameLayout} ${styles.gameLayoutSecondStage}`}>
                            <div className={styles.headlines}>
                                <p className={styles.subHealine}>Let's made:</p>
                                <h1 className={styles.mainHeadline}>Bibimbap</h1>
                            </div>
                            <div>
                            {data && data.map((info, index) => {
                                if(info.name === "rice")
                                    return (
                                        <div>
                                            <Image
                                                id="rice"
                                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesRice}`}
                                                src={info.image}
                                                alt={info.name}
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                ); else if(info.name === "beef")
                                    return (
                                        <div>
                                            <Image
                                                id="beef"
                                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesBeef}`}
                                                src={info.image}
                                                alt={info.name}
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                ); else if(info.name === "egg")
                                    return (
                                        <div>
                                            <Image
                                                id="egg"
                                                className={`${styles.stageTwoImages} ${styles.stageTwoImagesEgg}`}
                                                src={info.image}
                                                alt={info.name}
                                                width={150}
                                                height={150}
                                            />
                                        </div>
                                ); else if(info.name === "veggies")
                                return (
                                    <div>
                                        <Image
                                            id="vegetables"
                                            className={`${styles.stageTwoImages} ${styles.stageTwoImagesVeggies}`}
                                            src={info.image}
                                            alt={info.name}
                                            width={150}
                                            height={150}
                                        />
                                    </div>
                            );
                            })}
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
                                <Link href="/game" className={styles.thirdStageOptionDisplay}> 
                                    <Image
                                        src="/images/game/chef-hat.png"
                                        alt="chef-hat"
                                        width="80"
                                        height="80"
                                    />
                                    <p>Play again</p>
                                </Link>
                                <Link href="/meal-recipe" className={styles.thirdStageOptionDisplay}> 
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
                        <div style={{position:"absolute", bottom:"140px", cursor:"pointer"}}>
                            <p onClick={() => opneCollectPoints()}>Collect Points - modal box</p>
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
            <NavBar style={{position:"inherit"}}/>     
        </>
    )
}