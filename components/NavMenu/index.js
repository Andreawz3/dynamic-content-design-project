import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

// assets
import { CloseIcon } from '@/public/icons/icons';

export default function NavMenu({
    closeMenu
}) {
    return (
        <>
            <div className={styles.nav_menu__overlay}>
                <div className={styles.nav_menu}>
                    <button className={styles.nav_menu__close} onClick={closeMenu}>
                        <CloseIcon/>
                    </button>
                    <div className={styles.nav_menu__logo}>
                        <Image/>
                        <h1>yori</h1>
                    </div>
                    <div className={styles.nav_menu__links}>
                        <Link href={'/home'} onClick={closeMenu}>
                            <Image/>
                            <span>HOME</span>
                        </Link>
                        <Link href={'/shopping-list'}>
                            <Image/>
                            <span>SHOPPING LIST</span>
                        </Link>
                        <Link href={'/profile'}>
                            <Image/>
                            <span>PROFILE</span>
                        </Link>
                        <Link href={'/about'}>
                            <Image/>
                            <span>ABOUT</span>
                        </Link>
                        <Link href={'/game'}>
                            <Image/>
                            <span>GAME TUTORIAL</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}