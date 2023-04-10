import styles from '@/styles/Game.module.css';
import Image from 'next/image';
import Link from 'next/link';
// Components
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';
import Button from '@/components/Button';
import GameTutorial from '@/components/GameTutorial';
import GameHeadline from '@/components/GameHeadline';
import SelectedIngredients from '@/components/GameSelectedIngredients';
import PickIngredients from '@/components/GamePickIngredients';

export default function Game() {

    const showModalBox = () =>  {
        const tutorial = document.getElementById('gameTutorial');
        tutorial.style.display = 'block';

        const watchTutorial = document.getElementById('watch__tutorial');    
        watchTutorial.style.display = 'none';
    }

    const closeButton = () => {
        const tutorial = document.getElementById('gameTutorial');
        tutorial.style.display = 'none';

        const watchTutorial = document.getElementById('watch__tutorial');
        watchTutorial.style.display = 'block';     
    }
    
    return (
        <>
            <Header
                title={'Game'}
                metaTitle={'Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css"></link>
            <main className={styles.game__page}>
                <div id='gameTutorial' className={styles.game__tutotial}>
                    <GameTutorial/>
                    <div className={styles.game__tutotial_option}>
                        <div className={styles.skipTutorials__link} onClick={() => closeButton()}>
                            Skip tutorial 
                            <i class="fa fa-angle-double-right"></i>
                        </div>
                    </div>                                       
                </div>
                <div className={styles.game__layout}>
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
                    <Link 
                        className={styles.watch_tutorial}
                        id='watch__tutorial' 
                        href="#" 
                        onClick={() => showModalBox()}
                        style={{display:"none"}}
                    > Watch Tutorial
                    </Link>
                </div>                       
            </main>       
        </>
    )
}