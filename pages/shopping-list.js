import FilterMenu from '@/components/FilterMenu'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import Search from '@/components/Search'
import TopNav from '@/components/TopNav'
import useNavMenu from '@/hooks/navmenu'

import styles from '@/styles/ShoppingList.module.css'

export default function ShoppingList() {
    const listCategories = ["Recently Added", "By Recipe"];
    const {showMenu, setShowMenu} = useNavMenu();

    return (
        <>
            <Header
                title={`Shopping List`}
                metaTitle={`Shopping List`}
            />
            <main className={styles.list_page}>
                <TopNav openMenu={() => setShowMenu(true)} />
                <h1>Shopping List</h1>
                <Search/>
                <div className={styles.list_page__filter}>
                    <FilterMenu 
						filterMenu={listCategories}
						currentCategory={'all'}
						currentPage={'shopping-list'}
					/>
                </div>
				<div className={styles.list_page__content}>
                    
                </div>
            </main>
            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}