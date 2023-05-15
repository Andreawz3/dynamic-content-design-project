import styles from "@/styles/AboutLanding.module.css";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

//Components
import NavMenu from "@/components/NavMenu";
import NavBar from "@/components/NavBar";
import TopNav from "@/components/TopNav";

//hooks
import useNavMenu from "@/hooks/navmenu";

export default function AboutLanding() {
    const {showMenu, setShowMenu} = useNavMenu();
    return (
        <>
            <Header title={"About Landing"} metaTitle={"About Landing"} />
            <main className={styles.about__main}>
                <TopNav openMenu={() => setShowMenu(true)} boxShadow={false} backgroundColor={"transparent"}/>
                <div className={styles.about__main_content}>
                    <div className={styles.globe__container}>
                        <div className={styles.clouds}>
                            <Image
                                src='/images/about/cloud-left.svg'
                                alt='cloud'
                                width='150'
                                height='130'
                            />
                            <Image
                                src='/images/about/cloud-right.svg'
                                alt='cloud'
                                width='140'
                                height='130'
                            />
                        </div>
                        <Image
                            className={styles.earth_img}
                            src='/images/about/earth.svg'
                            alt='earth'
                            width='288'
                            height='243'
                        />
                    </div>

                    <div className={styles.about__yori}>
                        <div className={styles.yori__text_container}>
                            <Image
                                src='/logos/yori-logo-color.svg'
                                alt='logo'
                                width='105'
                                height='120'
                            />
                            <p>A cooking app that gives back. Learn how you can help using our app.</p>
                        </div>
                        <div className={styles.learn__more}>
                            <Link href='about'>
                                <Image
                                src='/images/about/up-arrow.svg'
                                alt='learn more arrow'
                                width='12'
                                height='7'
                                />
                                <p>Learn more</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
            <NavBar/>
            { showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)} />
            }
        </>
    );
}
