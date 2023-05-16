import Link from "next/link";
import Image from "next/image";
import styles from "./RecipeSwitchButton.module.css";
// hooks
import useRecipeSwitch from "@/hooks/recipeSwitch";
import getAllEffects from '@/hooks/getAllEffects';

export default function RecipeSwitchButton({props}) {
    const { switchTab, showIngredientList,showDirections } = useRecipeSwitch();
    const {gameStartSound} = getAllEffects();

	const savedIngredientList = () => {
		let selected = document.getElementById("checkBox").checked;

		if(selected) {
			document.getElementById("listSaved").style.display = "flex";
			gameStartSound();
			setTimeout(() => {
				document.getElementById("listSaved").style.display = "none";
				location.reload()
			}, 1500)
		}
	}

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
			<div id="listSaved" className={styles.savedIngredientContainer} style={{display:"none"}}>
				<div className={styles.ingredientsListSaved}>
					<Image
						src={"/images/game/mascot.png"}
						alt={""}
						width={100}
						height={100}
					/>
					<h1>Ingredient(s) Saved</h1>
				</div>
			</div>
			{showIngredientList && (
				<div className={styles.ingredients__container}>
					<div className={styles.ingredients__upper_text}>
						<p style={{color: "var(--color-lightgray)"}}>
							{props.ingredients.length} items
						</p>
						<div onClick={() => savedIngredientList()}>
							<div className={styles.ingredients__save_to_list}>
								<p>SAVE TO LIST</p>
								<Image
									src={"/icons/recipe/note-icon.svg"}
									alt={""}
									width={18}
									height={20}
								/>
							</div>
						</div>
					</div>
					<div className={styles.ingredients__list}>
						{props.ingredients.map((value, index) => {
							return (
								<div key={index} className={styles.ingredients}>
									<div className={styles.checklist__container}>
										<label className={styles.checklist__checkbox}>
											<input type="checkbox" id="checkBox"/>
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