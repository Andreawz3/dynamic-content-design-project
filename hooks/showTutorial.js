import { useState } from "react";

const displayTutorial = () => {
    const [showTutorial, setShowTutorial] = useState(false);
    console.log('clicked tutorial');

    return{showTutorial, setShowTutorial};
}

export default displayTutorial;