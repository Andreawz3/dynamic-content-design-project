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
            <main className={styles.home__page}>
                <TopNav/>
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