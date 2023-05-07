import Link from 'next/link'
import Image from 'next/image'
import styles from './MealCard.module.css'

export default function MealCard({data, index}) {
    return (
        <>
            <div className={styles.meal_card} key={index} >
                <Link href={`/meal-recipe/${data.slug}`} >
                    <Image
                        src={data.image}
                        alt={data.dishName}
                        width={290}
                        height={170}
                        className={styles.meal_card__img}
                    />
                    <div>
                        <h3>{data.dishName}</h3>
                        <div className={styles.meal_details}>
                            <div className={styles.prep_time}>
                                <Image
                                    src={"/icons/recipe/preptime-icon.svg"}
                                    alt={"preptime-icon"}
                                    width={14}
                                    height={14}
                                />
                                <span>{data.prepTime}</span>
                            </div>
                            <span className={styles.difficulty}>{data.difficulty}</span>
                            <span>{data.calories}</span>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}