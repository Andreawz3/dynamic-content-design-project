import { useState } from "react";
import { manduIngredientsList } from "@/data/manduIngrendients";

const getManduIngredients = () => {
    const [data, setData] = useState([...manduIngredientsList]);
    const rightAnswer = ["Pork", "Veggies", "Sauce", "Wrappers"];

    return {data, setData, rightAnswer};
}

export default getManduIngredients;