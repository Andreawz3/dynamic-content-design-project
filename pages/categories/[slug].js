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
import Image from 'next/image'
import Link from 'next/link'

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;
	const capitalizedSlug = slug?.charAt(0).toUpperCase() + slug?.slice(1);
	
	// Filter the data for the specific slug parameter
	const meals = inventory.recipe.filter(data => data.cuisineCategory.includes(capitalizedSlug));
	
	return {
		props: {
			meals, capitalizedSlug
		}
	};
}

export default function SlugCategory({meals, capitalizedSlug}) {
	const {showMenu, setShowMenu} = useNavMenu();
    const mealCategories = meal_categories.map((data) => data.category)	
    return (
        <>
            <Header
                title={`Category: ${capitalizedSlug}`}
                metaTitle={`Category: ${capitalizedSlug}`}
            />
            <main className={styles.category_page}>
                <TopNav openMenu={() => setShowMenu(true)} />
                <Greeting/>
                <Search/>
                <div className={styles.category_page__filter}>
                    <FilterMenu 
						filterMenu={mealCategories}
						currentCategory={capitalizedSlug}
						currentPage={'categories'}
					/>
                </div>
                <div className={styles.meal_card__container}>
                    {meals.map((data, index) => 
                        <div className={styles.meal_card} key={index} >
                            <Link href={data.dishName === 'Korean Bibimbap' ? '/meal-recipe' : '#'} >
                                <Image
                                    src={'/images/bibimbap.svg'}
                                    alt={'bibimbap'}
                                    width={290}
                                    height={170}
                                    className={styles.meal_card__img}
                                />
                                <div>
                                    <h3>{data.dishName}</h3>
                                    <div>
                                        <div></div>
                                        <span>{data.difficulty}</span>
                                        {/* <Image/> */}
                                    </div>
                                    <div className={styles.meal_card__buttons}>
                                        <span>View Details</span>
                                        <button>Start Cooking</button>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    )}
                </div>
            </main>
            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}