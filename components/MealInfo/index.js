import Image from 'next/image'
import styles from './MealInfo.module.css'

export default function MealInfo({image, info, label}) {
    return (
        <>
            <div className={styles.info}>
                <div className={styles.info__container}>
                    {image &&
                        <Image
                            src={image}
                            alt={label}
                            width={16}
                            height={16}
                        />
                    }
                    <h4>{info}</h4>
                </div>
                <p className={styles.info__label}>{label}</p>
            </div>
        </>
    )
}