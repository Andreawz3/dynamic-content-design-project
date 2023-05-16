// Hooks 
import getAllEffects from '@/hooks/getAllEffects';

export default function GameMusic() {
    const {gameSound} = getAllEffects();
    gameSound();

    return (
        <></>
    )
}