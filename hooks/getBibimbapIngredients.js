import { useState } from "react";
import { bibimbapIngredientsList } from "@/data/bibimbapIngredients"

const getBibimbapIngredients = () => {
    const [data, setData] = useState([...bibimbapIngredientsList]);

    return {data, setData};
}

export default getBibimbapIngredients;