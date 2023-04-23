import { useState } from "react";

const displayGame = () => {
    const [showGame, setShowGame] = useState(false);

    return{showGame, setShowGame};
}

export default displayGame;