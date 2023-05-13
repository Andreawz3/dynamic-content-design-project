import { useState } from "react";
import { rissotoIngredientsList } from "@/data/risottoIngredients"; 

const getRisottoIngredients = () => {
    const [data, setData] = useState([...rissotoIngredientsList]);
    const rightAnswer = ["Water", "Butter", "Cheese", "Veggies", "Soup"];

    return {data, setData, rightAnswer};
}

export default getRisottoIngredients;