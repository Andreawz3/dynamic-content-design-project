import styles from '@/styles/Home.module.css'

// components
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';
import Button from '@/components/Button';
// pages


export default function Home() {
    return (
        <>
            <Header
                title={'Home'}
                metaTitle={'Home'}
            />
            <main className={styles.home_page}>
                <TopNav/>
                <div className={styles.home_page__greeting}>
                    <h1>Hello, Jane</h1>
                    <p>Want to eat some healthy meals?</p>
                </div>
                <div className={styles.home_page__search}>
                    
                </div>
                <div className={styles.home_page__filter}>

                </div>
                <div className={styles.home_page__carousel}>

                </div>
                <div className={styles.home_page__categories}>

                </div>
                <Button
                    href='/game'
                    backgroundColour='var(--color-emerald)'
                    colour='var(--color-white)'
                    children='Play Now'
                />
            </main>
        </>
    )
}