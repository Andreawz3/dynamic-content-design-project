import Image from 'next/image'
import styles from '@/styles/Landing.module.css'

// components
import Header from '@/components/Header'
import Button from '@/components/Button'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Landing() {
	const [loading, setLoading] = useState(false);
	const [showLanding, setShowLanding] = useState(true);
	const router = useRouter();

	const showSplashScreen = () => {
		setLoading(true);
		setShowLanding(false);
	}

    useEffect(() => {
		const handleComplete = () => {
			setTimeout(() => {
				setLoading(false);
				router.push('/home');
			}, 2500)
		};
		router.events.on('routeChangeComplete', handleComplete);

		return () => {
			router.events.off('routeChangeComplete', handleComplete);
		}
    },[loading]);

	return (
		<>
			<Header 
				title='Landing'
				metaTitle='Landing'
			/>
			{loading &&
				<div className={styles.splash_screen}>
					<Image
						src={'/logos/splash-screen.svg'}
						alt={'splash-screen-animation'}
						width={150}
						height={170}
					/>
					<div>
						<div className={styles.loading_dots}></div>
						<div className={styles.loading_dots}></div>
						<div className={styles.loading_dots}></div>
						<div className={styles.loading_dots}></div>
					</div>
				</div>
			}
			{showLanding && 
				<main className={styles.landing_page}>
					<div className={styles.landing_page__container}>
						<Image 
							src={"/images/landing-animation.gif"}
							alt={"langding page image"}
							width={330}
							height={380}
							className={styles.landing__img}
							priority
						/>
						<div className={styles.landing_page__content}>
							<h1>The Taste Of Healthy Living</h1>
							<p>Fuel your body and soul with our deliciously easy and healthy recipes.</p>
						</div>
					</div>
					<div className={styles.link__home} onClick={() => showSplashScreen()}>
						<Button
							backgroundColour='var(--color-red)'
							colour='var(--color-white)'
							children='Get Started'
						/>
					</div>
				</main>
			}
		</>
	)
}
