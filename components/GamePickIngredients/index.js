import Image from "next/image"

export default function PickIngredients({
    src,
    alt,
}){
    return(
        <>

            <Image
                src={src}
                alt={alt}
                width="80"
                height="80"
            />
            
        </>
    )
}