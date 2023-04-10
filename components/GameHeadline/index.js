import styles from './GameHeadline.module.css'
import Link from 'next/link'

export default function GameHeadline({
    href,
    children,
    
}){
    return(
        <>
            <div className={styles.navBar}>
                <div className={styles.navBarOption}>
                    <Link href={href}><i class="fa fa-angle-left"></i> Back</Link>
                    <button className={styles.musicIcon}><i  class="fa fa-music"></i></button>
                </div>                   
            </div>
            <div className={styles.headlines}>
                <p className={styles.subHealine}>{children}</p>
                <h1 className={styles.mainHeadline}>Sandiwch</h1>
            </div>
            
        </>
    )
}