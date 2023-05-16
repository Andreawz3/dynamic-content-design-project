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
            <main className={styles.game__page}>
                <TopNav openMenu={() => setShowMenu(true)}/>
                <div className={styles.game__page_content}>
                    <div className={styles.game__header_container}>
                        <Image
                            className={styles.game__header_img}
                            src='/images/game/game-header.svg'
                            alt='game-header'
                            width='330'
                            height='165'
                        />
                        <Image
                            className={styles.sparkles_icon}
                            src='/images/game/sparkle-icons-white.svg'
                            alt='sparkles-white'
                            width='310'
                            height='200'
                        />
                    </div>
                    <div className={styles.game__title}>
                        <h2 className={styles.game__title_text}>Get Ready, Get Set, 
                            <span className={styles.cook__text}> Cook!</span>
                        </h2>
                        <Image
                            className={styles.yellow__sparkles}
                            src='/images/game/yellow-sparkle.svg'
                            alt='yellow-sparkles'
                            width='80'
                            height='30'
                        />
                    </div>

                    <div className={styles.game__collection}>
                        <div className={styles.game__card_bibimbap}>
                            <div className={styles.seeGameText}>
                                <p>Let's make a</p>
                                <h3>Bibimbap</h3> 
                                <Image
                                    className={styles.bibimbap__thumbnail}
                                    src='/images/game/bibimbap-vector-img.svg'
                                    alt='bibimbap-img'
                                    width='85'
                                    height='65'
                                />
                                <PlayGameButton
                                    href="/gameBibimbap" 
                                />
                            </div>
                        </div>
                        <div className={styles.game__card_mandu}>
                            <div className={styles.seeGameText}>  
                                <p>Let's make a</p>
                                <h3>Mandu</h3> 
                                <Image
                                    className={styles.mandu__thumbnail}
                                    src='/images/game/mandu-vector-img.svg'
                                    alt='mandu-img'
                                    width='85'
                                    height='65'
                                />
                                <PlayGameButton
                                    href="/gameMandu" 
                                />
                            </div>
                        </div>
                        <div className={styles.game__card_miso_pasta}>
                            <div className={styles.seeGameText}>  
                                <p>Let's make a</p>
                                <h3>Miso Pasta</h3> 
                                <Image
                                    className={styles.miso__pasta_thumbnail}
                                    src='/images/game/pasta-vector-img.svg'
                                    alt='miso-pasta-img'
                                    width='85'
                                    height='65'
                                    />
                                <PlayGameButton
                                    href="/gameMisoPasta"
                                />
                            </div>
                        </div>
                        <div className={styles.game__card_risotto}>
                            <div className={styles.seeGameText}>  
                                <p>Let's make a</p>
                                <h3>Risotto</h3> 
                                <Image
                                    className={styles.risotto__thumbnail}
                                    src='/images/game/risotto-vector-img.svg'
                                    alt='risotto-img'
                                    width='85'
                                    height='65'
                                />
                                <PlayGameButton
                                    href="/gameRissoto"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={styles.tutorial__button_container}>
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
                <Image
                    className={styles.footer__shapes}
                    src={'/logos/deco-shapes.svg'}
                    alt={'deco-shapes'}
                    width={445}
                    height={115}
                />
                </div>
            </main>  
            {showTutorial &&
                <GameTutorial/>
            }
            <NavBar/> 
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }       
        </>
    )
}