import { useState } from "react";
import { bibimbapIngredientsList } from "@/data/bibimbapIngredients"

const checkClick = () => {
    const [data, setData] = useState([...bibimbapIngredientsList]);
    let ingredientDataName;

    function checkIngredientClick() {
        for(let i = 0; i < data.length; i++){
            ingredientName = 
            [
                {  
                    name: data[i],
                    isClick: false
                },
            ]
        }
        
    }

    return {checkIngredientClick, ingredientDataName};
}

export default checkClick;