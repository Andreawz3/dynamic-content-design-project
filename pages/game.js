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
            <TopNav openMenu={() => setShowMenu(true)}/>
            <main className={styles.game__page}>
                {/* <div className={styles.top__nav}> */}
                    {/* <TopNav openMenu={() => setShowMenu(true)}/> */}
                    {/* </div> */}
                <div className={styles.game_display}>
                    

                    <div className={styles.game__header_container}>
                        <div className={styles.header__image_icons}>
                            <Image
                             className={styles.sparkles_icon}
                             src='/images/game/sparkle-icons-white.svg'
                             alt='sparkles-white'
                             width='310'
                             height='200'
                            />
                        </div>
                        <div className={styles.header__text_container}>
                        <div className={styles.left__header_content}>
                            <Image
                                className={styles.mascot_icon}
                                src='/images/game/mascot.png'
                                alt='mascot'
                                width='80'
                                height='80'
                            />
                        </div>
                        <div className={styles.right__header_content}>
                            <Image
                                className={styles.chef__hat_icon}
                                src='/images/game/chef-hat-icon.svg'
                                alt='chet-hat'
                                width='35'
                                height='35'
                            />
                            <h1 className={styles.kitchen___quest}>Kitchen Quest</h1>
                            <p className={styles.header__p}>Get ready to stir up some fun!</p>
                        </div>
                       
                        </div>

                    </div>

                    <div className={styles.game_container}>
                        <div className={styles.get__ready_header}>
                            <h2 className={styles.get__ready_text}>Get Ready, Get Set,</h2>
                            <h2 className={styles.cook__text}>Cook!</h2>
                        </div>
                        <Image
                            className={styles.yellow__sparkles}
                            src='/images/game/yellow-sparkles.svg'
                            alt='yellow-sparkles'
                            width='110'
                            height='90'
                        />
                        <div className={styles.games}>
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
                                        href="/gameRisotto"
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
                    </div>   
                    <div className={styles.footer__shapes}>
                    <Image
                    src={'/logos/deco-shapes.svg'}
                    alt={'deco-shapes'}
                    width={413}
                    height={115}
                    />
                    </div>
                </div>
                
                
                {showTutorial &&
                    <GameTutorial/>
                }
            </main>  
                {/* <div className={styles.nav__bar}> */}
                    <NavBar/> 
                    {showMenu && 
                        <NavMenu closeMenu={() => setShowMenu(false)}/>
                    }    
                {/* </div> */}
                
        </>
    )
}