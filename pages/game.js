import styles from '@/styles/Game.module.css';
import Link from 'next/link';
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import TopNav from '@/components/TopNav';
import GameTutorial from '@/components/GameTutorial';
import NavBar from '@/components/NavBar';
import NavMenu from "@/components/NavMenu";
import PlayGameButton from '@/components/PlayGameButton';

// Hooks
import displayTutorial from '@/hooks/showTutorial';
import useNavMenu from '@/hooks/navmenu';


export default function Game() {
    const {showMenu, setShowMenu} = useNavMenu();
    const {showTutorial, setShowTutorial} = displayTutorial();
    
    return (
        <>
            <Header
                title={'Game'}
                metaTitle={'Game'}
            />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <main className={styles.game__page}>
                <div className={styles.game_display}>
                    <TopNav openMenu={() => setShowMenu(true)}/>

                    <div className={styles.game__header_container}></div>

                    <div className={styles.game_container}>
                        <div className={styles.games}>
                            <div className={styles.game__card_bibimbap}>
                            <Link 
                                className={styles.seeGameText}
                                id='play_game' 
                                href="/gameBibimbap" 
                            >
                                <h6>Let's make a</h6>
                                <h3>Bibimbap</h3> 
                                <Image
                                className={styles.bibimbap__thumbnail}
                                src='/images/game/bibimbap-vector-img.svg'
                                alt='bibimbap-img'
                                width='100'
                                height='75'
                                />
                                {/* <PlayGameButton/> */}
                            </Link>
                                
                            </div>

                            <div className={styles.game__card_mandu}>
                            <Link 
                                className={styles.seeGameText}
                                id='play_game' 
                                href="/gameMandu" 
                            >  
                            <h6>Let's make a</h6>
                            <h3>Mandu</h3> 
                            <Image
                                className={styles.mandu__thumbnail}
                                src='/images/game/mandu-vector-img.svg'
                                alt='manduo-img'
                                width='100'
                                height='75'
                            />
                            {/* <PlayGameButton/> */}
                            </Link>
                            </div>

                            <div className={styles.game__card_miso_pasta}>
                            <Link 
                                className={styles.seeGameText}
                                id='play_game' 
                                href="/gameMisoPasta" 
                            >  
                            <h6>Let's make a</h6>
                            <h3>Miso Pasta</h3> 
                            <Image
                                className={styles.miso__pasta_thumbnail}
                                src='/images/game/pasta-vector-img.svg'
                               alt='miso-pasta-img'
                               width='100'
                               height='75'
                                />
                            {/* <PlayGameButton/> */}
                            </Link>
                            </div>

                            <div className={styles.game__card_risotto}>
                            <Link 
                                className={styles.seeGameText}
                                id='play_game' 
                                href="/gameRisotto" 
                            >  
                            <h6>Let's make a</h6>
                            <h3>Risotto</h3> 
                            <Image
                               className={styles.risotto__thumbnail}
                               src='/images/game/risotto-vector-img.svg'
                               alt='risotto-img'
                               width='100'
                               height='75'
                            />
                            {/* <PlayGameButton/> */}
                            </Link>
                            </div>
                        </div>

                        <Link 
                            className={styles.tutorial_button}
                            id='watch__tutorial' 
                            href="#" 
                            onClick={() => setShowTutorial(true)}
                        >
                            <Image
                                src={'/images/game/idea_icon.png'}
                                alt={'idea-icon'}
                                width={20}
                                height={20}
					        />
                            SEE TUTORIAL
                            </Link>                  
                    </div>
                </div>
                
                
                {showTutorial &&
                    <GameTutorial/>
                } 
            </main>  
            <NavBar style={{position:"inherit"}}/> 
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
      }    
        </>
    )
}