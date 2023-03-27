import styles from './Button.module.css'
import Link from 'next/link'

export default function Button({
    border = "none",
    backgroundColour = "var(--avocado)",
    colour = "var(--white)",
    href = "",
    children = "",
    height = "30px",
    radius = "30px",
    width = "100px",
    pointer = "pointer"
}) {
    return (
        <>
            <Link href={href}>
                <button 
                    className={styles.button}
                    style={{
                        backgroundColor: backgroundColour,
                        color: colour,
                        border: border,
                        borderRadius: radius,
                        height: height,
                        width: width,
                        cursor: pointer
                    }}>
                    {children}
                </button>
            </Link>
        </>
    )
}
