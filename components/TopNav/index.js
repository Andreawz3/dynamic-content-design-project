import React from "react"
import styles from './TopNav.module.css'
import { MenuIcon } from "@/public/icons/icons"
import Image from "next/image"

export default function TopNav({
    boxShadow = true,
    backgroundColor = "var(--color-white)",
}) {
    return (
        <>
            <div className={styles.top__nav} style={{boxShadow: boxShadow && "0px 4px 10px rgba(0, 0, 0, 0.2)", backgroundColor: backgroundColor}}>
                <MenuIcon className={styles.menu__icon} />
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