import styles from '@/styles/Home.module.css'

// components
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';

export default function Home() {
    return (
        <>
            <Header
                title={'Home'}
                metaTitle={'Home'}
            />
            <main className={styles.home__page}>
                <TopNav/>

            </main>
        </>
    )
}