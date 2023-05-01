import { useState } from "react";

const answerPoint = () => {
    const [point, setPoint] = useState(1);

    function add () {
        setPoint(point + 1);
    }

    return {point, add};
}

export default answerPoint;