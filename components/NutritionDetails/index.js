import styles from './NutritionDetails.module.css'
import Image from 'next/image'

//assets
import { CloseIcon } from '@/public/icons/icons'

//hooks
import { NutritionChart } from '@/components/NutritionChart'


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
            <div className={styles.nutrition__container}>
            <NutritionChart/>
            </div>
        </div>
        </>
    )
}