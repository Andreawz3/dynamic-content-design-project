import Image from 'next/image'
import styles from './MealCategory.module.css'

// assets
import breakfastIcon from '@/public/icons/category/breakfast.svg'
import lunchIcon from '@/public/icons/category/lunch.svg'
import dinnerIcon from '@/public/icons/category/dinner.svg'
import snackIcon from '@/public/icons/category/snack.svg'

export default function MealCategory({ category }) {
    return (
        <>
            <div 
                className={styles.meal_categories__card}
                style={{
                    backgroundColor: 
                        category == 'Breakfast' ? 'var(--color-teal)' :
                        category == 'Lunch' ? 'var(--color-red)' :
                        category == 'Dinner' ? 'var(--color-orange)' :
                        category == 'Snacks' ? 'var(--color-light-green)' : ''
                }}
            >
                <Image
                    src={
                        category == 'Breakfast' ? breakfastIcon :
                        category == 'Lunch' ? lunchIcon :
                        category == 'Dinner' ? dinnerIcon :
                        category == 'Snacks' ? snackIcon : ''
                    }
                    alt={
                        category == 'Breakfast' ? 'breakfast-icon' :
                        category == 'Lunch' ? 'lunch-icon' :
                        category == 'Dinner' ? 'dinner-icon' :
                        category == 'Snacks' ? 'snack-icon' : ''
                    }
                    width={90}
                    height={80}
                />
                <p>{category}</p>
            </div>
        </>
    )
}