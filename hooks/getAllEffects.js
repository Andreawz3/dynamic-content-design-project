import useSound from "use-sound";


function getAllEffects() {
    const gameSound = gameMusic();
    const clickSound = clickEffect();
    const incorrectSound = wrongEffect();
    const correctSound = rightEffect();
    const cook = mixIngredients();    
    const pointsSound = collectPointsEffect();

    return {
        gameSound,
        clickSound,
        correctSound,
        incorrectSound,
        cook,
        pointsSound
    }
}

function gameMusic() {
    const soundUrl = '/sounds/jeopardy.mp3';
    const [play] = useSound(
        soundUrl, 
        { volume: 0.1,}
    );
    
    function playAudio() {
        play();
    };
    return playAudio;
}

function clickEffect() {
    const soundUrl = '/sounds/jump.mp3';
    const [play] = useSound(soundUrl, {
        volume: 0.5,
    });
    
    function playAudio() {
        play();
    };

    return playAudio;
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