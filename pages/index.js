// components
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'

export default function Home() {
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<NavBar/>
			</main>
		</>
	)
}
