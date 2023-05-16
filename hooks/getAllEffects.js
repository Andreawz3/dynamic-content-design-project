import useSound from "use-sound";


function getAllEffects() {
    const gameStartSound = gameStart();
    const clickSound = clickEffect();
    const incorrectSound = wrongEffect();
    const correctSound = rightEffect();
    const cook = mixIngredients();    
    const pointsSound = collectPointsEffect();

    return {
        gameStartSound,
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

function gameStart() {
    const soundUrl = '/sounds/game-start.mp3';
    const [play] = useSound(
        soundUrl, 
        { volume: 0.3,}
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