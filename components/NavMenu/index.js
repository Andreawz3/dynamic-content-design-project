import Link from 'next/link'
import Image from 'next/image'
import styles from './NavMenu.module.css'

// assets
import { AboutIcon, CloseIcon, GameOutlineIcon, GameSolidIcon, HomeSolidIcon, ListSolidIcon, ProfileIcon } from '@/public/icons/icons';

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
                        <Image 
                            src={'/logos/logo.svg'}
                            alt={'logo'}
                            width={55}
                            height={45}
                        />
                        <h1>yori</h1>
                    </div>
                    <div className={styles.nav_menu__links}>
                        <Link href={'/home'} onClick={closeMenu}>
                            <HomeSolidIcon fill='var(--color-black)' />
                            <span>HOME</span>
                        </Link>
                        <Link href={'/shopping-list'}>
                            <ListSolidIcon fill='var(--color-black)' />
                            <span>SHOPPING LIST</span>
                        </Link>
                        <Link href={'/profile'}>
                            <ProfileIcon/>
                            <span>PROFILE</span>
                        </Link>
                        <Link href={'/about-landing'}>
                            <AboutIcon/>
                            <span>ABOUT</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}