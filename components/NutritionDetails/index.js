import styles from './NutritionDetails.module.css'
import { useState } from 'react';

//assets
import { CloseIcon } from '@/public/icons/icons'
import NutritionChart from '@/components/NutritionChart'

export default function NutritionDetails({
    closeMenu, props
}) {
    return (
        <>
            <div className={styles.overlay__background}>
                <div className={styles.overlay__container}>
                    <button 
                        className={styles.overlay__close_button} 
                        onClick={closeMenu}
                    >
                        <CloseIcon stroke='var(--color-black)'/>
                    </button>
                    <h1>Nutritional Value</h1>
                    <div className={styles.nutrition__container}>
                        <NutritionChart props={props}/>
                    </div>
                </div>
            </div>
        </>
        )
}