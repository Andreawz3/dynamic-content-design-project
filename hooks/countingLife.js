import { useState } from "react";

const countingLife = () => {
    const [lives, setLives] = useState(3);

    function deductLives() {
        setLives(lives - 1);
    }

    return {lives, deductLives};
}

export default countingLife;