import Image from 'next/image'
import { useState } from 'react';
import { inventory } from '@/data/recipes';

import styles from './FeaturedMeal.module.css'
import Link from 'next/link';

export default function FeaturedMeal() {

    const featuredMeal = inventory.recipe.slice(0, 3);
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <>
            <Link href={`/meal-recipe/${featuredMeal[currentIndex].slug}`}>
                <div className={styles.featured_meal}>
                    <Image
                        src={featuredMeal[currentIndex].image}
                        alt={featuredMeal[currentIndex].dishName}
                        width={330}
                        height={250}
                    />
                    <div className={styles.featured_meal__details}>
                        <h2>{featuredMeal[currentIndex].dishName}</h2>
                        <p>{featuredMeal[currentIndex].featuredDesc}</p>
                        <div className={styles.info}>
                            <span>{featuredMeal[currentIndex].prepTime.toUpperCase()} </span>
                            <div/>
                            <span>{featuredMeal[currentIndex].difficulty.toUpperCase()}</span>
                        </div>
                    </div>
                </div>
            </Link>
            <div className={styles.featured_meal__dots}>
                {featuredMeal.map((value, index) => 
                    <div key={index} onClick={() => setCurrentIndex(index)} style={{backgroundColor: currentIndex === index ? "var(--color-avocado)" : "var(--color-light-green)"}} />
                )}
            </div>
        </>
    )
}