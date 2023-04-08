import Image from 'next/image'
import styles from '@/styles/Landing.module.css'
// components
import Header from '@/components/Header'
import Button from '@/components/Button'

export default function Landing() {

	return (
		<>
			<Header 
				title='Landing Page'
				metaTitle='Landing Page'
			/>
			<main className={styles.landing_page}>
				<div className={styles.landing_page__container}>
					<Image 
						src={"/images/landing-img.png"}
						alt={"langding page image"}
						width={320}
						height={320}
						className={styles.landing__img}
					/>
					<div className={styles.landing_page__content}>
						<h1>The Taste Of Healthy Living</h1>
						<p>Fuel your body and soul with our deliciously easy and healthy recipes.</p>
					</div>
				</div>
				<div className={styles.link__home}>
					<Button
						backgroundColour='var(--color-black)'
						colour='var(--color-white)'
						children='Get Started'
						href='/home'
					/>
				</div>
			</main>
		</>
	)
}
