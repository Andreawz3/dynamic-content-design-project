import Image from 'next/image'
import styles from './NutritionButton.module.css'
import showNutritionDetails from '@/hooks/nutritionDetails';

export default function NutritionButton() {

    const {showNutrition, setShowNutrition} = showNutritionDetails();

    return (
        <>
            <div
                className={styles.nutrition}
                onClick={()=>{setShowNutrition(!showNutrition)}}
            >
                <button className={styles.nutrition__button}> 
                    <span> NUTRITION DETAILS </span>
                    <Image
                        className={styles.apple__icon}
                        src={"/icons/recipe/apple.svg"}
                        alt={"apple-icon"}
                        height={20}
                        width={20}
                    />
                </button>
            </div>
        </>
    )
}