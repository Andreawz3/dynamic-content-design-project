import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

// components
import Search from '@/components/Search';
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';
import Button from '@/components/Button';
import FilterMenu from '@/components/FilterMenu';

// data
import { inventory } from '@/data/recipes';

export default function Home() {
    const [recipeData, setRecipeData] = useState(inventory.recipe);
    const [currentFilter, setCurrentFilter] = useState("");
    const filteredCategory = [];
    
    recipeData.forEach((value) => {
        if (!filteredCategory.includes(value.category)) {
            filteredCategory.push(value.category);
		}
	});
    
    const filterMenu = filteredCategory.map((country) => {
        return {
            country: country,
        }
    })

    return (
        <>
            <Header
                title={'Home'}
                metaTitle={'Home'}
            />
            <main className={styles.home_page}>
                <TopNav/>
                <div className={styles.home_page__greeting}>
                    <h1>Hello, Jane</h1>
                    <p>Want to eat some healthy meals?</p>
                </div>
                <div className={styles.home_page__search}>
                    <Search />
                </div>
                <div className={styles.home_page__filter}>
                    <FilterMenu filterMenu={filterMenu} />
                </div>
                <div className={styles.home_page__carousel}>
                    <div className={styles.featured_meal}>
                        <Image
                            src={'/images/featured-meal-placeholder.png'}
                            alt={'featured-meal-placeholder'}
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
                    <div className={styles.featured_meal__dots}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                <div className={styles.home_page__categories}>
                    <h2>Meal Categories</h2>
                    <div className={styles.meal_categories}>
                        <Image
                            src={'/images/meal-category-placeholder.png'}
                            alt={'meal-category-placeholder.png'}
                            width={155}
                            height={170}
                        />
                    </div>
                </div>
                <Button
                    href='/game'
                    backgroundColour='var(--color-emerald)'
                    colour='var(--color-white)'
                    children='Play Now'
                />
            </main>
        </>
    )
}