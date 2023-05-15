import styles from './NutritionDetails.module.css'
import { useState } from 'react';

//assets
import { CloseIcon } from '@/public/icons/icons'
import NutritionChart from '@/components/NutritionChart'

export default function NutritionDetails({
    closeMenu
}) {
    return (
        <>
            <div className={styles.overlay__background}>
                <div className={styles.overlay__container}>
                {/* <div className={styles.skipTutorials__link} onClick={() => setShowTutorial(false)}>
                                    Skip tutorial 
                                    <i class="fa fa-angle-double-right"></i>
                                </div> */}
                    <button 
                        className={styles.overlay__close_button} 
                        onClick={closeMenu}
                    >
                        <CloseIcon/>
                    </button>
                    <h1>Nutritional Value</h1>
                    <div className={styles.nutrition__container}>
                        <NutritionChart/>
                    </div>
                </div>
            </div>
        </>
        )
}