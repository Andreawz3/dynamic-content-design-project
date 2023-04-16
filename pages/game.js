import styles from '@/styles/Game.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameTutorial from '@/components/GameTutorial';
import SelectedIngredients from '@/components/GameSelectedIngredients';
import PickIngredients from '@/components/GamePickIngredients';
import NavBar from '@/components/NavBar';

export default function Game() {

    const showModalBox = () =>  {
        const tutorial = document.getElementById('game-tutorial');
        tutorial.style.display = 'contents';
    }

    const skipTutorial = () => {
        const tutorial = document.getElementById('game-tutorial');
        tutorial.style.display = 'none';          
    }

    const pickIngredient = () => {
        const ingredient = document.getElementsByClassName("ingredient");
        // ingredient.style.background ='blue'; 
        console.log(ingredient.style); 
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
                    // style={{display:"none"}}
                    >
                    <GameTutorial/>
                    {/* <div className={styles.skipTutorials__link} onClick={() => skipTutorial()}>
                        Skip tutorial 
                        <i class="fa fa-angle-double-right"></i>
                    </div>    */}
                </div>
                <div className={styles.game_container}>
                    <div className={styles.game_layout}>
                        <div className={styles.navBar}>
                            <div className={styles.navBarOption}>
                                <Link href='/home'><i class="fa fa-angle-left"></i>Back</Link>
                                <div className={styles.navbar_icons}>
                                    <div>
                                        <Link 
                                        className={styles.watch_tutorial}
                                        id='watch__tutorial' 
                                        href="#" 
                                        onClick={() => showModalBox()}
                                        >Watch Tutorial <i class="fa fa-plus-square"></i>
                                    </Link>
                                    </div>
                                    <button className={styles.musicIcon}><i  class="fa fa-music"></i></button>
                                </div>
                                
                            </div>                   
                        </div>
                        <div className={styles.headlines}>
                            <p className={styles.subHealine}>Let's cook a:</p>
                            <h1 className={styles.mainHeadline}>Sandiwch</h1>
                        </div>
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
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                class="egg"
                                                src="/images/game/ingredients/apple.png"
                                                alt="apple"
                                        />
                                    </div>
                                    <div onClick={() => pickIngredient()} class='ingredient' id='egg'>
                                        <PickIngredients
                                                src="/images/game/ingredients/sunny-egg.png"
                                                alt="egg"
                                        />
                                    </div>    
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/bowl-of-rice.jpeg"
                                                alt="bowlOfRice"
                                        />
                                    </div>    
                                </div>
                                <div className={styles.ingredientsSections}>
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/ham.jpeg"
                                                alt="ham"
                                        />
                                    </div>    
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/chocolate.jpeg"
                                                alt="chocolateBar"
                                        />
                                    </div>
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/cheese.jpeg"
                                                alt="cheese"
                                        />
                                    </div>    
                                </div>
                                <div className={styles.ingredientsSections}>
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/drumstick.jpeg"
                                                alt="drumstick"
                                        />
                                    </div>    
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/bread.jpeg"
                                                alt="bread"
                                        />
                                    </div>    
                                    <div onClick={() => pickIngredient()} class='ingredient'>
                                        <PickIngredients
                                                src="/images/game/ingredients/orange.jpeg"
                                                alt="orange"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.next__button} style={{visibility:"hidden"}}>
                            <Button                      
                                href="#"
                                backgroundColour='var(--color-emerald)'
                                colour='var(--color-white)'
                                children="Next"
                            />      
                        </div>
                        <div>
                            <NavBar style={{position:"inherit"}}/>
                        </div>                       
                    </div>
                </div>                       
            </main>       
        </>
    )
}