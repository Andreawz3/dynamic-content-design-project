import { useState } from "react";

export default function useNutritionDetails() {
    const [showNutrition, setShowNutrition] = useState(false);

    return {showNutrition, setShowNutrition};
}