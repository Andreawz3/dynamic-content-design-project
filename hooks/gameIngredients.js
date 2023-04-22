import { useState } from "react";
import { gameIngredientsList } from "@/data/game-ingredients"

const gameIngredients = () => {
    const [data, setData] = useState([...gameIngredientsList]);

    return {data, setData};
}

export default gameIngredients;