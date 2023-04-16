import styles from './Greeting.module.css'

export default function Greeting() {
    return (
        <>
            <div className={styles.home_page__greeting}>
                <h1>Hello, Jane</h1>
                <p>Want to eat some healthy meals?</p>
            </div>
        </>
    )
}