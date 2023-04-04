import styles from "./NavBar.module.css";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.home__icon}>
          <Link href="/">
            <Image
              src="/assets/navbar-icons/home-primary.png"
              alt={"home"}
              height={40}
              width={40}
            />
          </Link>
        </div>
        <div className={styles.favourites__icon}>
          <Link href="/favourites">
            <Image
              src="/assets/navbar-icons/fave-primary.png"
              alt={"favourites"}
              height={40}
              width={40}
            />
          </Link>
        </div>
        <div className={styles.list__icon}>
          <Link href="/shoppingList">
            <Image
              src="/assets/navbar-icons/notes-primary.png"
              alt={"list"}
              height={40}
              width={40}
            />
          </Link>
        </div>
      </nav>
    </>
  );
}
