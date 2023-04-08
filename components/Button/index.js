import styles from './Button.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Button({
    border = "none",
    backgroundColour = "var(--avocado)",
    colour = "var(--white)",
    href = "", 
    children, imgBefore, imgAfter, imgAlt, imgWidth, imgHeight
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
