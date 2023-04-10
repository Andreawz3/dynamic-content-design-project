import styles from './Button.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Button({
    href = "", 
    fontSize = "16px",
    fontWeight = "300",
    padding = "20px 50px",
    border, colour, backgroundColour, children, imgBefore, imgAfter, imgAlt, imgWidth, imgHeight
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
                    className={styles.button}
                    style={{
                        backgroundColor: backgroundColour,
                        color: colour,
                        border: border,
                        fontSize: fontSize,
                        fontWeight: fontWeight,
                        padding: padding,
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
