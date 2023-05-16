import { useState } from "react";

const displayTutorial = () => {
    const [showTutorial, setShowTutorial] = useState(false);

    return{showTutorial, setShowTutorial};
}

export default displayTutorial;