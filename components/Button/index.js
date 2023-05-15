import styles from './Button.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Button({
    href = "", 
    fontSize = "16px",
    fontWeight = "400",
    padding = "20px 50px",
    categoryButton,
    border, colour, backgroundColour, children, imgBefore, imgAfter, imgAlt, imgWidth, imgHeight, boxShadow
}) {
    return (
        <>
            <Link href={href}>
            {imgBefore && 
                    <Image
                        src={imgBefore}
                        alt={imgAlt}
                        width={imgWidth}
                        height={imgHeight}
                    />
                }
                <button 
                    className={categoryButton ? styles.category_button : styles.button}
                    style={{
                        backgroundColor: backgroundColour,
                        color: colour,
                        border: border,
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        padding: padding,
                        filter: boxShadow && "drop-shadow(4px 4px 10px rgba(0, 0, 0, 0.1))"
                    }}>
                    {children}
                </button>
                {imgAfter && 
                    <Image
                        src={imgAfter}
                        alt={imgAlt}
                        width={imgWidth}
                        height={imgHeight}
                    />
                }
            </Link>
        </>
    )
}
