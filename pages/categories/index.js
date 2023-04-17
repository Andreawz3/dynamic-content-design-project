import FilterMenu from '@/components/FilterMenu'
import Greeting from '@/components/Greeting'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import Search from '@/components/Search'
import TopNav from '@/components/TopNav'

import { meal_categories } from '@/data/meal-categories'
import { inventory } from '@/data/recipes'

import useNavMenu from '@/hooks/navmenu'

import styles from '@/styles/Categories.module.css'

export default function Categories() {
    const meals = inventory.recipe
	const {showMenu, setShowMenu} = useNavMenu();
    const mealCategories = meal_categories.map((data) => data.category)	

    return (
        <>
            <Header
                title={`Category`}
                metaTitle={`Category`}
            />
            <main className={styles.category_page}>
                <TopNav openMenu={() => setShowMenu(true)} />
                <Greeting/>
                <Search/>
                <div className={styles.category_page__filter}>
                    <FilterMenu 
						filterMenu={mealCategories}
						currentCategory={'all'}
						currentPage={'categories'}
					/>
                </div>
				{meals.map((data, index) => 
					<div key={index}>
						{data.dishName}
					</div>
				)}
            </main>
            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}