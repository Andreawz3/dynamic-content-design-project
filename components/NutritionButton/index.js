import Image from 'next/image'
import styles from './NutritionButton.module.css'

export default function NutritionButton({
    openDetails
}) {

    return (
        <>
            <div
                className={styles.nutrition}
                onClick={openDetails}
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