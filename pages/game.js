import styles from '@/styles/Game.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import TopNav from '@/components/TopNav';
import GameTutorial from '@/components/GameTutorial';
import NavBar from '@/components/NavBar';

// Hooks
import displayTutorial from '@/hooks/showTutorial';

export default function Game() {
    const {showTutorial, setShowTutorial} = displayTutorial();
    
    return (
        <>
            <Header
                title={'Game'}
                metaTitle={'Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.game__page}>
                <TopNav openMenu={() => setShowMenu(true)}/>
                <div>
                    <div>
                        <Link 
                            className={styles.seeGameText}
                            id='play_game' 
                            href="/playGame" 
                        >PLAY GAME</Link>
                        <Link 
                            className={styles.seeTutorialText}
                            id='watch__tutorial' 
                            href="#" 
                            onClick={() => setShowTutorial(true)}
                        >SEE TUTORIAL</Link>
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