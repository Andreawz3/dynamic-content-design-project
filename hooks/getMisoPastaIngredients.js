import { useState } from "react";
import { misoPastaIngredientsList } from "@/data/misoPastaIngredients";

const getMisoPasteIngredients = () => {
    const [data, setData] = useState([...misoPastaIngredientsList]);
    const rightAnswer = ["Miso Paste", "Veggies", "Pasta", "Peanut Butter"];

    return {data, setData, rightAnswer};
}

export default getMisoPasteIngredients;