import styles from './NavBar.module.css'
import Image from "next/image";

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.home__icon}>
                    <Image 
                        src={"/assets/navbar-icons/home-primary.png"}
                        alt={"site-logo"}
                        height={50}
                        width={50}
                    />
                </div>
            </nav>
        </>
    )
}