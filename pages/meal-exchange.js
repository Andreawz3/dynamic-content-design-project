import styles from "@/styles/MealExchange.module.css";
import Header from "@/components/Header";
import Image from "next/image";

//components
import TopNav from "@/components/TopNav";
import NavBar from "@/components/NavBar";
import NavMenu from "@/components/NavMenu";

//hooks
import useNavMenu from "@/hooks/navmenu";

export default function MealExchange() {
    const {showMenu, setShowMenu} = useNavMenu();
  return (
    <>
      <Header title={"Meal Exchange"} metaTitle={"Meal Exchange"} />
      <main className={styles.meal__exchange_main}>
        <div className={styles.top__nav}>
          <TopNav openMenu={() => setShowMenu(true)} />
        </div>
        <div className={styles.featured__image_container}>
            <Image
             className={styles.img__border}
             src='/images/about/image-border.svg'
             alt='img border'
             width='330'
             height='200'
            />
            <Image
            className={styles.meal__exchange_img}
            src='/images/about/meal-exchange-img.svg'
            alt='meal exchange'
            width='290'
            height='200'
            />
        </div>
        <div className={styles.about__section}>
            <div className={styles.about__header}>
                <h3>Meal Exchange</h3>
            </div>
            <div className={styles.about__p}>
                <p>Meal Exchange is a Canadian charity that works to create sustainable food systems and promote food security in Canadian communities. They work with students and youth to develop community-based solutions to food insecurity, including community gardens, food recovery programs, and food skills training. 
                </p>
                <p>
                    By empowering young people to take action and create positive change in their communities, Meal Exchange is working towards a future where everyone has access to healthy, affordable, and culturally appropriate food.
                </p>
            </div>
        </div>
            <div className={styles.footer__shapes}>
                 <Image
                src={'/logos/deco-shapes.svg'}
                alt={'deco-shapes'}
                width={445}
                height={115}
                />
            </div>
      </main>
      
      <div className={styles.nav__bar}>
        <NavBar style={{ position: "inherit" }} />
        {showMenu && <NavMenu closeMenu={() => setShowMenu(false)} />}
      </div>
    </>
  );
}