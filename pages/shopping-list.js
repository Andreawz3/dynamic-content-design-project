import FilterMenu from '@/components/FilterMenu'
import Header from '@/components/Header'
import NavBar from '@/components/NavBar'
import NavMenu from '@/components/NavMenu'
import Search from '@/components/Search'
import TopNav from '@/components/TopNav'
// data
import { shopping_list } from '@/data/shopping-list'
// hooks
import useCheckList from '@/hooks/checkList'
import useNavMenu from '@/hooks/navmenu'

import styles from '@/styles/ShoppingList.module.css'

export default function ShoppingList() {
    const {showMenu, setShowMenu} = useNavMenu();
    const {checked, handleCheckedItems} = useCheckList();
    const listCategories = ["Recently Added", "By Recipe"];
    const shoppingList = shopping_list;

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
                    {shoppingList.map((data, index) => 
                        <div 
                            key={index}
                            className={styles.shopping_list}
                            style={{
                                borderLeft: checked.includes(index) ? "4px solid var(--color-lightgray)" : data.id == 1 ? "4px solid var(--color-teal)" : "4px solid var(--color-orange)",
                                color: checked.includes(index) ? "var(--color-lightgray)" : "initial" 
                            }}
                        >
                            <div className={styles.shopping_list__content}>
                                <p style={{textDecorationLine: checked.includes(index) ?  "line-through" : "none"}}>{data.quantity} {data.ingredient}</p>
                                <p>saved from {data.meal} recipe</p>
                            </div>
                            <label className={styles.shopping_list__checkbox}>
                                <input type="checkbox" onChange={() => handleCheckedItems(index)} />
                                <span className={styles.checkmark}></span>
                            </label>
                        </div>
                    )}
                </div>
                
            </main>
            <NavBar/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}