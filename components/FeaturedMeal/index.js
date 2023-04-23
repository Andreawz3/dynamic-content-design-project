import Image from 'next/image'
import styles from './FeaturedMeal.module.css'

export default function FeaturedMeal({
    image = "", name, desc, time, difficulty
}) {
    return (
        <>
            <div className={styles.featured_meal}>
                <Image
                    src={image}
                    alt={name}
                    width={330}
                    height={250}
                />
                <div className={styles.featured_meal__details}>
                    <h2>Meal Name</h2>
                    <p>Torem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <div className={styles.info}>
                        <span>25 MIN</span>
                        <div/>
                        <span>EASY</span>
                    </div>
                </div>
            </div>
        </>
    )
}