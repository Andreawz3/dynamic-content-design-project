import { useState } from "react";

export default function useRecipeSwitch() {
    const [showIngredientList, setShowIngredientList] = useState(true)
    const [showDirections, setShowDirections] = useState(false)

    const switchTab = () => {
        setShowIngredientList(!showIngredientList);
        setShowDirections(!showDirections);
    }


    return {switchTab, showDirections, showIngredientList}
}