import useSound from "use-sound";

function rightEffect() {
    const soundUrl = '/sounds/right.mp3';
    const [play] = useSound(soundUrl, {
        volume: 1,
    });
    
    function playAudioRight() {
        play();
    };

    return {playAudioRight};
}

export default rightEffect;