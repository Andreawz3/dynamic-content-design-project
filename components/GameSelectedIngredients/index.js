import Image from "next/image"
import styles from "./GameSelectedIngredients.module.css"

export default function SelectedIngredients({
    src,
    children
}){
    return (
        <>
            <div className={styles.checkbox}>
                <Image
                    src={src}
                    alt="selectCircle-img"
                    width="50"
                    height="50"
                />
                <p>{children}</p>
            </div>
        </>
    )
}