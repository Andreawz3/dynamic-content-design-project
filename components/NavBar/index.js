import styles from './NavBar.module.css'
import Image from '../../public/assets/navbar-icons'

export default function NavBar() {
    return (
        <>
            <nav className={styles.navbar}>
                <div className={styles.home__icon}>
                    <Image src=''></Image>
                </div>
            </nav>
        </>
    )
}