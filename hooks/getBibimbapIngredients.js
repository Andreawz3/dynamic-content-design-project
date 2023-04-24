import { useState } from "react";
import { bibimbapIngredientsList } from "@/data/bibimbapIngredients"

const getBibimbapIngredients = () => {
    const [data, setData] = useState([...bibimbapIngredientsList]);
    const rightAnswer = ["Rice", "Veggies", "Egg", "Beef"];

    return {data, setData, rightAnswer};
}

export default getBibimbapIngredients;