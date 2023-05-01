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
        <div className={styles.top__nav}>
          <TopNav openMenu={() => setShowMenu(true)} />
        </div>
      <main className={styles.about__main}>
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
          <div className={styles.sparkles}>
            <div className={styles.sparkles__top}>
            <Image
            src='/images/about/sparkle-left.svg'
            alt='sparkle'
            width='100'
            height='100'
            />
            <Image
            src='/images/about/sparkle-right.svg'
            alt='sparkle'
            width='70'
            height='60'
            />
            </div>
            <div className={styles.sparkles__bottom}>
            <Image
            src='/images/about/sparkle-bottom.svg'
            alt='sparkle'
            width='300'
            height='80'
            />
            </div>
          </div>
          <div className={styles.globe}>
            <Image
            src='/images/about/globe.svg'
            alt='globe'
            width='300'
            height='300'
            />
          </div>
        </div>

        <div className={styles.about__yori}>
          <div className={styles.yori__logo}>
            <Image
             src='/logos/yori-logo-color.svg'
             alt='logo'
             width='105'
             height='120'
            />
          </div>
          <div className={styles.yori__text_container}>
            <p>A cooking app that gives back. Learn how you can help using our app.</p>
          </div>
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
      </main>
      <div className={styles.nav__bar}>
        <NavBar/>
        {showMenu && <NavMenu closeMenu={() => setShowMenu(false)} />}
      </div>
    </>
  );
}
