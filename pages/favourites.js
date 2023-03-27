// components
import Header from '@/components/Header'
import styles from '@/styles/Favourites.module.css'
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';


export default function Favourites() {
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<NavBar/>
				<Logo/>
				fave
			</main>
		</>
	)
}
