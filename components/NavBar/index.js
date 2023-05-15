import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './NavBar.module.css'

import { 
    GameOutlineIcon,
    GameSolidIcon,
    HomeOutlineIcon,
    HomeSolidIcon,
    ListOutlineIcon,
    ListSolidIcon,
} from '@/public/icons/icons';

export default function NavBar() {
    const router = useRouter();

    return (
        <nav className={styles.navbar}>
            <Link href={'/home'}>
                {router.pathname == '/home' ? 
                    <HomeSolidIcon/> : <HomeOutlineIcon/>
                }
            </Link>
            <Link href={'/game'}>
                {router.pathname == '/game' ? 
                    <GameSolidIcon/> : <GameOutlineIcon/>
                }
            </Link>
            <Link href={'/shopping-list'}>
                {router.pathname == '/shopping-list' ? 
                    <ListSolidIcon/> : <ListOutlineIcon/>
                }
            </Link>
        </nav>
    )
}
