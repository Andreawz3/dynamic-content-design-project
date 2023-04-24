import { useState } from "react";
import { bibimbapIngredientsList } from "@/data/bibimbapIngredients"

const getBibimbapIngredients = () => {
    const [data, setData] = useState([...bibimbapIngredientsList]);
    const righttAnswer = ["Rice", "Veggies", "Egg", "Ground Beef"];

    return {data, setData, righttAnswer};
}

export default getBibimbapIngredients;