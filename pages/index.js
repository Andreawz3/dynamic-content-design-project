// components
import Header from '@/components/Header'
import styles from '@/styles/Landing.module.css'
import NavBar from '@/components/NavBar'
import Logo from '@/components/Logo'
import Button from '@/components/Button'
import Image from 'next/image'

export default function Landing() {

	return (
		<>
			<Header 
				title='Yori - Landing Page'
				metaTitle='Yori - Landing Page'
			/>
			<main className={styles.main}>
				{/* <Image /> */}
				<h1>The Taste Of Healthy Living</h1>
				<p>Fuel your body and soul with our deliciously easy and healthy recipes.</p>
				<button>
					{/* <Image /> */}
				</button>
			</main>
		</>
	)
}
