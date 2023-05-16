import Link from "next/link";
import Image from "next/image";
import styles from "./RecipeSwitchButton.module.css";
// hooks
import useRecipeSwitch from "@/hooks/recipeSwitch";

export default function RecipeSwitchButton({props}) {
    const { switchTab, showIngredientList,showDirections } = useRecipeSwitch();

    return(
        <>
			<div className={styles.recipe__button_container}>
				<div className={styles.toggle__switch} onClick={() => switchTab()}>
					<div 
						className={styles.green__moving} 
						style={{transform: showDirections ? "translateX(190px)" : "none"}}
					/>
					<button 
						className={styles.ingredients__tab} 
						style={{ color: showIngredientList ? "white" : "#26594D" }}
					>Ingredients</button>
					<button 
						className={styles.directions__tab} 
						style={{ color: showDirections ? "white" : "#26594D" }}
					>Directions</button>
				</div>
			</div>
			{showIngredientList && (
				<div className={styles.ingredients__container}>
					<div className={styles.ingredients__upper_text}>
						<p style={{color: "var(--color-lightgray)"}}>
							{props.ingredients.length} items
						</p>
						<div className={styles.ingredients__save_to_list}>
							<Link href={`/meal-recipe/${props.slug}`}>
								<p>SAVE TO LIST</p>
								<Image
									src={"/icons/recipe/note-icon.svg"}
									alt={""}
									width={18}
									height={20}
								/>
							</Link>
						</div>
					</div>
					<div className={styles.ingredients__list}>
						{props.ingredients.map((value, index) => {
							return (
								<div key={index} className={styles.ingredients}>
									<div className={styles.checklist__container}>
										<label className={styles.checklist__checkbox}>
											<input type="checkbox" />
											<span className={styles.checkmark}></span>
										</label>       
										<p className={styles.container}>
											{value.ingredientName}
										</p> 
									</div>
									<span className={styles.measurement}>
										{value.measurementType}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			)}

			{showDirections && (
				<div className={styles.directions__container}>
					<div className={styles.directions__upper_text}>
						<p>{props.servingSize}</p>
						<p>{props.price}</p>
					</div>
					<div className={styles.directions__steps}>
						{props.directions.map((step, index) => {
							return (
								<div key={index} className={styles.step__header_1}>
									<h2 className={styles.directions_header}>Step {index + 1}</h2>
									<p className={styles.directions__text}>{step}</p>
								</div>
							);
						})}
					</div>
				</div>
			)}
        </>
    )
}