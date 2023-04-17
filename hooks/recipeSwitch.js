import { useState } from "react";

export default function useRecipeSwitch() {
    const [showIngredientList, setShowIngredientList] = useState(true)
    const [showDirections, setShowDirections] = useState(false)

    const op = () => {
        setShowIngredientList(!showIngredientList);
        setShowDirections(!showDirections);
    }


    return {op, showDirections, showIngredientList}
}