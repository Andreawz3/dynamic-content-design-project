import styles from './Buttons.module.css'

export default function Buttons({
    type = "",
}) {
    return (
        <>
            <button>{type}</button>
        </>
    )
}