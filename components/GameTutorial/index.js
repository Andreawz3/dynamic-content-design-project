import styles from "./GameTutorial.module.css"
import Image from "next/image"
import { useState } from "react";

// Components
import Button from '@/components/Button';

// Hooks
import displayGame from '@/hooks/showGame';

export default function GameTutorial(){
    const [showTutorial, setShowTutorial] = useState(true);
    const {showGame, setShowGame} = displayGame();

    const Next = (step) => {
        let steps = document.getElementsByClassName("step");
        for (let i = 0; i < steps.length; i++) {
            steps[i].style.display = "none";
        }
        document.getElementById(step).style.display = "block";
    }

    const CloseModalBox = () => {
        const tutorial = document.getElementById('modal-box');
        tutorial.style.display = 'none';
        setShowGame(true)
    }

    return (
        <>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            {showTutorial &&
                <div id="modal-box" className={styles.modalBox}>
                    <div className={styles.gameToturialDisplay}> 
                        {/* Let's Play */}
                        <div id="letsPlay" className="step" style={{display:"block"}}>        
                            <div className={styles.tutorialDisplay}>
                                <div className={styles.gameToturial}>
                                    <p>At Yori, we get to play with our food!</p>
                                    <h1 className={styles.headline}>Let's Play</h1>
                                </div>
                                <Image
                                    className={styles.mascot}
                                    src = "/images/game/mascot.png"
                                    alt="cooking-wok"
                                    width="250"
                                    height="250"
                                    />
                                <div className={styles.lets_play_next_button} onClick={() => Next("findMatch")}>
                                    <Button                    
                                        href=""
                                        backgroundColour='var(--color-emerald)'
                                        colour='var(--color-white)'
                                        children="Next"
                                    />
                                </div>
                                <div className={styles.skipTutorials__link} onClick={() => setShowTutorial(false)}>
                                    Skip tutorial 
                                    <i className="fa fa-angle-double-right"></i>
                                </div>
                            </div>  
                        </div>
                        {/* Find the Math Ingredient */}
                        <div id="findMatch" className="step" style={{display:"none"}}>
                            <div className={styles.tutorialDisplay} >
                                <div className={styles.find_match_display}>
                                    <h1 className={styles.headline}>Find the Match!</h1>
                                    <div className={styles.findMatchView}>
                                        <div className={styles.findIngredientSample}>
                                            <div>                                              
                                                <Image
                                                    className={styles.wrong_ingredient}
                                                    src = "/images/game/ingredients/tomato.png"
                                                    alt="tomato"
                                                    width="80"
                                                    height="80"
                                                />
                                                
                                            </div>
                                            <div className={styles.arrowIcon}>
                                                <i className="fa fa-long-arrow-right"></i>
                                            </div>
                                            <div className={styles.rightPick}>
                                                <Image
                                                    src = "/images/game/wrong.png"
                                                    alt="wrong"
                                                    width="30"
                                                    height="30"
                                                />
                                                <p>Carrot</p>    
                                            </div>
                                        </div>
                                        <div className={styles.findIngredientSample}>
                                            <div>
                                                <Image
                                                    className={styles.correct_ingredient}
                                                    src = "/images/game/ingredients/carrot.png"
                                                    alt="carrot"
                                                    width="80"
                                                    height="80"
                                                />
                                            </div>
                                            <div className={styles.arrowIcon}>
                                                <i className="fa fa-long-arrow-right"></i>
                                            </div>
                                            <div className={styles.rightPick}>
                                                <Image
                                                    src = "/images/game/selected.png"
                                                    alt="wrong"
                                                    width="30"
                                                    height="30"
                                                />
                                                <p>Carrot</p>    
                                            </div>
                                        </div>
                                    </div>    
                                    <p>
                                        Click on the correct image to find the right ingredient
                                    </p>
                                </div>
                                <div className={styles.find_match_next_button} onClick={() => Next("threeLife")}>
                                    <Button                    
                                        href=""
                                        backgroundColour='var(--color-emerald)'
                                        colour='var(--color-white)'
                                        children="Next"
                                    />
                                </div>
                                <div className={styles.skipTutorials__link} onClick={() => setShowTutorial(false)}>
                                    Skip tutorial 
                                    <i className="fa fa-angle-double-right"></i>
                                </div> 
                            </div>
                        </div>
                        {/* Three Life */}
                        <div id="threeLife" className="step" style={{display:"none"}}>
                            <div className={styles.tutorialDisplay}>
                                <div className={styles.life}>
                                    <h1 className={styles.headline}>You have Three Attempts</h1>
                                    <Image
                                        src = "/images/game/threeLife.png"
                                        alt="cooking-wok"
                                        width="220"
                                        height="220"
                                        paddingBottom="10px"
                                    />
                                    <p className={styles.tutorialParagraph}>
                                        Get all the right ingredients before losing all your life
                                    </p>
                                </div>
                                <div className={styles.find_match_next_button} onClick={() => Next("timeToMix")}>
                                    <Button                    
                                        href=""
                                        backgroundColour='var(--color-emerald)'
                                        colour='var(--color-white)'
                                        children="Next"
                                    />
                                </div>
                                <div className={styles.skipTutorials__link} onClick={() => setShowTutorial(false)}>
                                    Skip tutorial 
                                    <i className="fa fa-angle-double-right"></i>
                                </div>
                            </div> 
                        </div>
                        {/* Time to Mix */}
                        <div id="timeToMix" className="step" style={{display:"none"}}>
                            <div className={styles.tutorialDisplay}>
                                <div className={styles.timeToMix}>
                                    <h1 className={styles.headline}>Time to Mix!</h1>
                                    <Image
                                        src = "/images/game/chef.png"
                                        alt="cooking-wok"
                                        width="300"
                                        height="250"
                                    />
                                    <p className={styles.tutorialParagraph}>
                                        Mix your ingredients to cook up your healthy meal
                                    </p>
                                </div>
                                <div className={styles.time_to_mix_next_button} onClick={() => CloseModalBox()}>
                                    <Button                    
                                        href=""
                                        backgroundColour='var(--color-emerald)'
                                        colour='var(--color-white)'
                                        children="Let's get cooking!"
                                    />
                                </div>
                            </div>
                        </div>              
                    </div> 
                </div>   
            }        
        </>
    )
}