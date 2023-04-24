import useSound from "use-sound";

function wrongEffect() {
    const soundUrl = '/sounds/incorrect.mp3';
    const [play] = useSound(soundUrl, {
        volume: 1,
    });
    
    function playAudioWrong() {
        play();
    };

    return {playAudioWrong};
}

export default wrongEffect;