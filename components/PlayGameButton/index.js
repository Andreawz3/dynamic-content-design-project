import styles from './PlayGameButton.module.css';
import Link from 'next/link';
import Image from 'next/image';


export default function PlayGameButton({
}) {
    return (
        <>
            <Link  
                className={styles.play__button_container}
                href="#"
            > PLAY GAME
                <Image
                    src={'/images/game/arrow_icon.svg'}
                    alt={'idea-icon'}
                    width={20}
                    height={20}
                    />
            </Link>
        </>
    )
}
