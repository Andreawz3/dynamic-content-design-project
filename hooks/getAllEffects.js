import useSound from "use-sound";

function getAllEffects() {
    const incorrectSound = wrongEffect();
    const correctSound = rightEffect();
    const cook = mixIngredients();    
    const pointsSound = collectPointsEffect();


    return {
        correctSound,
        incorrectSound,
        cook,
        pointsSound
    }
}

function rightEffect() {
    const soundUrl = '/sounds/right.mp3';
    const [play] = useSound(soundUrl, {
        volume: 0.5,
    });
    
    function playAudio() {
        play();
    };

    return playAudio;
}

function wrongEffect() {
    const soundUrl = '/sounds/incorrect.mp3';
    const [play] = useSound(soundUrl, {
        volume: 0.5,
    });
    
    function playAudio() {
        play();
    };

    return playAudio;
}

function mixIngredients() {
    const soundUrl = '/sounds/cook.mp3';
    const [play] = useSound(soundUrl, {
        volume: 0.5,
    });
    
    function playAudio() {
        play();
    };

    return playAudio;
}

function collectPointsEffect() {
    const soundUrl = '/sounds/collect_coins.mp3';
    const [play] = useSound(soundUrl, {
        volume: 0.5,
    });
    
    function playAudio() {
        play();
    };

    return playAudio;
}

export default getAllEffects;