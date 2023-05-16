import { useState } from "react";

// export default function showNutritionDetails() {
const showNutritionDetails = () => {
    const [showNutrition, setShowNutrition] = useState(false);

    return {showNutrition, setShowNutrition};
}

export default showNutritionDetails;