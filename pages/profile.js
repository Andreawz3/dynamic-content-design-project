import styles from '@/styles/Profile.module.css'
import Image from 'next/image';

// Components
import Header from '@/components/Header';
import NavBar from '@/components/NavBar';
import NavMenu from "@/components/NavMenu";
import TopNav from '@/components/TopNav';
import DoughnutChart from '@/components/DoughnutChart/DoughnutChart';
import Button from '@/components/Button';

// Hooks
import useNavMenu from '@/hooks/navmenu';

export default function Profile() {
    const {showMenu, setShowMenu} = useNavMenu();

    return (
        <>
            <Header
                title={'Profile'}
                metaTitle={'Profile'}
            />
            <main>
                <TopNav openMenu={() => setShowMenu(true)}/>
                <div className={styles.profileContainer}>
                    <div className={styles.profileInfo}>
                        <Image
                            className={styles.profileImage}
                            src='/images/profile/jane.jpeg'
                            alt='profile-img'
                            width='250'
                            height='250'
                        />
                        <h1>Jane Foster</h1>
                        <div>
                            <div>
                                <DoughnutChart/>
                            </div>
                            <div>
                                <div>
                                    <Image
                                        src='/images/profile/birthday.png'
                                        alt='birthday-icon'
                                        width='30'
                                        height='30'
                                    />
                                    <div className={styles.personalInfo}>
                                        <p>BIRTHDAY</p>
                                        <p>09/20/1995</p>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='/images/profile/mail.png'
                                        alt='birthday-icon'
                                        width='30'
                                        height='30'
                                    />
                                    <div className={styles.personalInfo}>
                                        <p>EMAIL</p>
                                        <p>user@email.com</p>
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src='/images/profile/phone.png'
                                        alt='birthday-icon'
                                        width='30'
                                        height='30'
                                    />
                                    <div className={styles.personalInfo}>
                                        <p>PHONE</p>
                                        <p>(320) 123 - 5678</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Button
                            href="/game"
                            backgroundColour='var(--color-avocado)'
                            colour='var(--color-white)'
                            children="Play Games"
                        />
                    </div>
                </div>
            </main>
            <NavBar style={{position:"inherit"}}/>
            {showMenu && 
                <NavMenu closeMenu={() => setShowMenu(false)}/>
            }
        </>
    )
}