import { FilterIcon, SearchIcon } from '@/public/icons/icons'
import styles from './Search.module.css'

export default function Search() {
    return (
        <>
            <div className={styles.home_page__search}>
                <div className={styles.search__container}>
                    <div className={styles.search__icon}>
                        <SearchIcon/>
                    </div>
                    <input
                        className={styles.search__input}
                        placeholder="Search"
                        type="text"
                        // onChange={onChange}
                        // onFocus={osnFocus}
                        // value={query}
                    />
                    <div className={styles.filter__icon}>
                        <FilterIcon/>
                    </div>
                </div>
            </div>
        </>
    )
}