import Image from "next/image"
import styles from "./GamePickIngredients.module.css"

export default function PickIngredients({
    src,
    alt,
}){
    return(
        <>
            <Image
                className={styles.ingredientImages}
                src={src}
                alt={alt}
                width="80"
                height="80"
            />
        </>
    )
}