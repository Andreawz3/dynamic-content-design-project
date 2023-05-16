import { useState } from "react";

const playGameMusic = () => {
    const [playMusic, setPlayMusic] = useState(true);

    return{playMusic, setPlayMusic};
}

export default playGameMusic;