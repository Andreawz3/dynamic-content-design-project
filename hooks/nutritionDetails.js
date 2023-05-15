import { useState } from "react";

// export default function showNutritionDetails() {
const showNutritionDetails = () => {

    console.log("Click");

    const [showNutrition, setShowNutrition] = useState(false);
    console.log(showNutrition);

    return {showNutrition, setShowNutrition};
}

export default showNutritionDetails;