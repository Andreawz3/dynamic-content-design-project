import styles from "@/styles/About.module.css";
import Image from "next/image";
import Link from "next/link";

//Components
import Header from "@/components/Header";
import TopNav from "@/components/TopNav";
import NavBar from "@/components/NavBar";
import NavMenu from "@/components/NavMenu";

//Hooks
import useNavMenu from '@/hooks/navmenu';

export default function About() {
    const {showMenu, setShowMenu} = useNavMenu();
    return (
        <>
            <Header title={"About"} metaTitle={"About"} />
            <main className={styles.about__main}>
                <TopNav openMenu={() => setShowMenu(true)} />
                <div className={styles.about__main_container}>
                    <div className={styles.featured__image_container}>
                        <Image
                            className={styles.img__border}
                            src='/images/about/image-border.svg'
                            alt='img border'
                            width='330'
                            height='200'
                        />
                        <Image
                            className={styles.yori__img}
                            src='/images/about/yori-img.svg'
                            alt='yori img'
                            width='290'
                            height='200'
                        />
                    </div>
                    <div className={styles.about__section}>
                        <h3 className={styles.about__header}>About</h3>
                        <div className={styles.about__p}>
                            <p>
                                Welcome to our mobile app Yori! Our app is designed to help you not only cook delicious meals, but also to give back to those who are struggling financially while promoting healthy living.
                            </p>
                            <p>
                                We believe that everyone deserves access to nutritious and affordable food, regardless of their financial situation. That's why a portion of our app's proceeds go towards supporting local food banks and other charitable organizations that help fight hunger.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.about__section}>
                    <h3 className={styles.about__header}>Resources</h3>
                </div>
                <div className={styles.resources__section}>
                    <div className={styles.resources__content}>
                        <Image
                            className={styles.img__icons}
                            src='/images/about/meal-exchange.svg'
                            alt='meal exchange image'
                            width='65'
                            height='65'
                        />
                        <div className={styles.resource_container}>
                            <h6 className={styles.resources_h6}>Meal Exchange</h6>
                            <Link href='meal-exchange'>See more</Link>
                        </div>
                    </div>
                    <div className={styles.resources__content}>
                        <Image
                            className={styles.img__icons}
                            src='/images/about/breakfast-club.svg'
                            alt='breakfast club image'
                            width='65'
                            height='65'
                        />
                        <div className={styles.resource_container}>
                            <h6 className={styles.resources_h6}>Breakfast Club Canada</h6>
                            <Link href='#'>See more</Link>
                        </div>   
                    </div>
                    <div className={styles.resources__content}>
                        <Image
                            className={styles.img__icons}
                            src='/images/about/hunger-project.svg'
                            alt='hunger project image'
                            width='65'
                            height='65'
                        />
                        <div className={styles.resource_container}>
                            <h6 className={styles.resources_h6}>The Hunger Project</h6>
                            <Link href='#'>See more</Link>
                        </div>
                    </div>
                </div>
                <Image
                    className={styles.footer__shapes}
                    src={'/logos/deco-shapes.svg'}
                    alt={'deco-shapes'}
                    width={445}
                    height={115}
                />
            </main>
            <div className={styles.nav__bar}>
                <NavBar style={{ position: "inherit" }} />
                {showMenu && <NavMenu closeMenu={() => setShowMenu(false)} />}
            </div>
        </>
    );
}
