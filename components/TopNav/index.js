import React from "react"
import styles from './TopNav.module.css'
import { MenuIcon } from "@/public/icons/icons"
import Image from "next/image"

export default function TopNav() {
    return (
        <>
            <div className={styles.top__nav}>
                <MenuIcon className={styles.menu__icon} />
                <Image
                    src={'/images/profile-placeholder.png'}
                    alt={'profile-placeholder'}
                    width={40}
                    height={40}
                />
            </div>
        </>
    )
}