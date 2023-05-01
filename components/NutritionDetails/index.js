import styles from './NutritionDetails.module.css'
import Image from 'next/image'

//assets
import { CloseIcon } from '@/public/icons/icons'

//hooks


export default function NutritionDetails({
    closeDetails
}) {
    return (
        <>
        <div className={styles.overlay__container}>
            <button className={styles.overlay__close_button} onClick={closeDetails}>
                <CloseIcon/>
            </button>
            <h1>Nutritional Value</h1>
            <div className={styles.scroll__container}>
                <Image 
                src="/images/game/bibimbap-vector-img"
                alt="bibimbap-vector"
                width={200}
                height={100}
                />

            </div>
        </div>
        </>
    )
}