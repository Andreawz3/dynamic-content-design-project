// components
import Header from '@/components/Header'
import styles from '@/styles/Home.module.css'
import NavBar from '@/components/NavBar'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Home() {
	return (
		<>
			<main className={styles.main}>
				{/* <Image /> */}
				<h1>Nutritiously Good</h1>
				<p>Discover the right meals for a healthy lifestyle.</p>
				<button>
					{/* <Image /> */}
				</button>
			</main>
		</>
	)
}
