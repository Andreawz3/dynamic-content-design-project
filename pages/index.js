// components
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Logo from '@/components/Logo'
import Button from '@/components/Button'


export default function Home() {
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<NavBar/>
				<Logo/>
				<Button
					href="https://github.com/Andreawz3/dynamic-content-design-project"
					children='Click Me'
				/>
			</main>
		</>
	)
}
