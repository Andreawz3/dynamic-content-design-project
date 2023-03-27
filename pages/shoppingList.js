// components
import Header from '@/components/Header'
import styles from '@/styles/ShoppingList.module.css'
import NavBar from '@/components/NavBar';
import Logo from '@/components/Logo';


export default function ShoppingList() {
	return (
		<>
			<Header/>
			<main className={styles.main}>
				<NavBar/>
				<Logo/>
				list
			</main>
		</>
	)
}
