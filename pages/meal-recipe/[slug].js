import Image from 'next/image'
import Link from 'next/link'

import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import TopNav from '@/components/TopNav'
import NutritionButton from '@/components/NutritionButton'
import MealInfo from '@/components/MealInfo'
import RecipeSwitchButton from '@/components/RecipeSwitchButton'
import NutritionDetails from '@/components/NutritionDetails'

import { inventory } from '@/data/recipes'

import useNavMenu from '@/hooks/navmenu'
import useNutritionDetails from '@/hooks/nutritionDetails'

import styles from '@/styles/MealRecipe.module.css'
import showNutritionDetails from '@/hooks/nutritionDetails'

export async function getServerSideProps(context) {
	const { params } = context;
	const { slug } = params;
	
	// Find the data for the specific slug parameter
	const recipe = inventory.recipe.find(data => data.slug.includes(slug));
	return {
		props: {
			slug, recipe
		}
	};
}

export default function SlugMealRecipe({slug, recipe}) {
	const {showMenu, setShowMenu} = useNavMenu();
	const {showNutrition, setShowNutrition} = showNutritionDetails();

    return (
        <>
            <Header
                title={`Meal Recipe: ${slug}`}
                metaTitle={`Meal Recipe: ${slug}`}
            />
            <main className={styles.main__meal_recipe_content}>
                <TopNav openMenu={() => setShowMenu(true)} />
                <div className={styles.top__section}>
					<Link href="/categories" className={styles.back__button}>
						<Image
							src={"/icons/recipe/back-icon.svg"}
							alt={"back-icon"}
							width={20}
							height={17}
						/>
						<p className={styles.back__text}>Back</p>
					</Link>
					{/* <NutritionButton openDetails={()=> setShowNutrition(true)}/> */}
					<div className={styles.nutrition__link}>
					<Link 
						href="#" 
						className={styles.nutrition__button_container}
						onClick={() => setShowNutrition(true)}
					> 
							NUTRITION DETAILS
							<Image
								className={styles.apple__icon}
								src={"/icons/recipe/apple.svg"}
								alt={"apple-icon"}
								height={20}
								width={20}
							/>
					</Link> 
					</div>
				</div>
				<div className={styles.meal__details_container}>
					<div className={styles.meal__image_container}>
					<Image
						src={recipe.image}
						alt={recipe.dishName}
						width={350}
						height={170}
					/>
					</div>
					<div className={styles.meal__information_preview}>
						<MealInfo
							image={"/icons/recipe/cooktime-icon.svg"}
							info={recipe.cookTime}
							label={"cook time"}
						/>
						<MealInfo
							image={"/icons/recipe/preptime-icon.svg"}
							info={recipe.prepTime}
							label={"prep time"}
						/>
						<MealInfo
							info={recipe.difficulty.toUpperCase()}
							label={"level"}
						/>
						<MealInfo
							image={"/icons/recipe/star.svg"}
							info={Math.floor(Math.random() * (5 - 4) + 4)}
							label={"rating"}
						/>
					</div>
				</div>
				<div className={styles.recipe__container}>
					<h1 className={styles.recipe__header_container}>{recipe.dishName}</h1>
					<RecipeSwitchButton props={recipe} />
				</div>
            </main>

            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
            {showNutrition &&
				<NutritionDetails closeMenu={() => setShowNutrition(false)}/>
			}
        </>
    )
}