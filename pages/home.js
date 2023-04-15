import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css'

// components
import Search from '@/components/Search';
import TopNav from "@/components/TopNav";
import Header from '@/components/Header';
import Button from '@/components/Button';
import FilterMenu from '@/components/FilterMenu';
import NavBar from '@/components/NavBar';
import FeaturedMeal from '@/components/FeaturedMeal';
import MealCategory from '@/components/MealCategory';
import NavMenu from '@/components/NavMenu';

// hooks
import useNavMenu from '@/hooks/navmenu';

// data
import { inventory } from '@/data/recipes';

export default function Home() {
    const [recipeData, setRecipeData] = useState(inventory.recipe);
    const [currentFilter, setCurrentFilter] = useState("");
    const {showMenu, setShowMenu} = useNavMenu();
    const filteredCategory = [];
    const mealCategories = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
    
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
                <TopNav openMenu={() => setShowMenu(true)} />
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
                    <FeaturedMeal/>
                    <div className={styles.featured_meal__dots}>
                        <div/>
                        <div/>
                        <div/>
                    </div>
                </div>
                <div className={styles.home_page__categories}>
                    <h2>Meal Categories</h2>
                    <div className={styles.meal_categories}>
                        {mealCategories.map((category, index) => 
                            <MealCategory key={index} category={category}/>
                        )}
                    </div>
                </div>
            </main>
            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}