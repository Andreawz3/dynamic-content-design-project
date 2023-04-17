import Image from 'next/image'
import styles from './MealCategory.module.css'

export default function MealCategory({ props }) {
    return (
        <>
            <div 
                className={styles.meal_categories__card}
                style={{ backgroundColor: props.color }}
            >
                <Image
                    src={props.image}
                    alt={props.category}
                    width={90}
                    height={80}
                />
                <p>{props.category}</p>
            </div>
        </>
    )
}