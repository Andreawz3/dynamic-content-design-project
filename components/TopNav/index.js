import Image from "next/image"
import styles from './TopNav.module.css'

// assets
import { MenuIcon } from "@/public/icons/icons"

export default function TopNav({
    boxShadow = true,
    backgroundColor = "var(--color-white)",
    openMenu
}) {
    return (
        <>
            <div className={styles.top__nav} style={{boxShadow: boxShadow && "0px 4px 10px rgba(0, 0, 0, 0.2)", backgroundColor: backgroundColor}}>
                <button onClick={openMenu}>
                    <MenuIcon/>
                </button>
                <Image
                    src={'/images/jane.jpeg'}
                    alt={'profile-placeholder'}
                    width={40}
                    height={40}
                />
            </div>
        </>
    )
}