import styles from './Icon.module.css'

export function MenuIcon() {
    return (
        <>
            <svg className={styles.icon} width="21" height="30" viewBox="0 0 21 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.9191 10.7327C11.7696 10.7327 13.2179 8.43642 13.2179 4.66886C13.2179 0.9013 11.7696 0.5 10.9191 0.5C10.0686 0.5 8.62008 0.9013 8.62008 4.66886C8.62008 8.43642 10.0686 10.7327 10.9191 10.7327Z" fill="currentColor"/>
            <path d="M8.36194 11.5088C9.05753 11.186 9.01202 9.48369 6.99374 7.59255C4.97546 5.70142 3.57589 6.04973 2.8803 6.37253C2.18472 6.69534 1.21499 7.44657 3.23327 9.3377C5.25155 11.2288 7.66635 11.8316 8.36194 11.5088Z" fill="currentColor"/>
            <path d="M1.5 14C0.671573 14 0 14.6716 0 15.5C0 16.3284 0.671573 17 1.5 17H19.5C20.3284 17 21 16.3284 21 15.5C21 14.6716 20.3284 14 19.5 14H1.5Z" fill="currentColor"/>
            <path d="M3.5 20.25C2.67157 20.25 2 20.9216 2 21.75C2 22.5784 2.67157 23.25 3.5 23.25L18.5 23.25C19.3284 23.25 20 22.5784 20 21.75C20 20.9216 19.3284 20.25 18.5 20.25L3.5 20.25Z" fill="currentColor"/>
            <path d="M6.5 29.25H14.5C15.3284 29.25 16 28.5784 16 27.75C16 26.9216 15.3284 26.25 14.5 26.25H6.5C5.67157 26.25 5 26.9216 5 27.75C5 28.5784 5.67157 29.25 6.5 29.25Z" fill="currentColor"/>
            </svg>
        </>
    )
}
export function SearchIcon() {
    return (
        <>
            <svg className={styles.icon} width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="10" r="9" transform="matrix(-1 0 0 1 20 0)" stroke="currentColor" strokeidth="2"/>
            <line x1="1" y1="-1" x2="7" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 17 16)" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}
export function FilterIcon() {
    return (
        <>
            <svg className={styles.icon} width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 8L16 8" stroke="currentColor" strokeLinecap="round"/>
            <path d="M1 14L16 14" stroke="currentColor" strokeLinecap="round"/>
            <circle cx="9" cy="2" r="2" fill="currentColor"/>
            <circle cx="5" cy="8" r="2" fill="currentColor"/>
            <circle cx="9" cy="14" r="2" fill="currentColor"/>
            <path d="M1 2L16 2" stroke="currentColor" strokeLinecap="round"/>
            </svg>
        </>
    )
}
export function BackArrowIcon() {
    return (
        <>
            <svg className={styles.icon} width="9" height="13" viewBox="0 0 9 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line x1="7.86469" y1="1.40233" x2="1.40232" y2="6.37339" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="1" y1="-1" x2="9.15314" y2="-1" transform="matrix(-0.792624 -0.609711 -0.609711 0.792624 8.04761 13)" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}

export function CloseIcon({stroke="currentColor"}) {
    return (
        <>
            <svg className={styles.close_icon} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 1L1 11" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M11 11L1 1" stroke={stroke} strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </>
    )
}

export function AboutIcon() {
    return (
        <>
            <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12.5" cy="12.5" r="12.5" fill="currentColor"/>
            <path d="M10.7899 7.968C10.7899 8.88 11.4619 9.472 12.4859 9.472C13.5099 9.472 14.1819 8.88 14.1819 7.968C14.1819 7.072 13.5099 6.48 12.4859 6.48C11.4619 6.48 10.7899 7.072 10.7899 7.968ZM10.9019 12.288V16.016C10.9019 16.304 10.6939 16.8 10.6939 17.088C10.6939 17.6 11.1579 18 11.7659 18H13.2379C13.8459 18 14.3099 17.6 14.3099 17.088C14.3099 16.8 14.1019 16.304 14.1019 16.016V10.352C14.1019 9.952 13.7819 9.776 13.3339 9.856L11.6219 10.144C11.0619 10.24 10.6779 10.592 10.6779 11.152C10.6779 11.536 10.9019 11.952 10.9019 12.288Z" fill="var(--color-white)"/>
            </svg>
        </>
    )
}
export function ProfileIcon() {
    return (
        <>
            <svg width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.9265" cy="6.55594" r="6.55594" fill="currentColor"/>
            <path d="M6.87892 14.2046C0.687196 14.933 -0.253704 20.5784 0.0498123 23.3101C5.14888 25.4954 16.1362 24.5241 20.9924 23.7653C22.0851 17.5736 17.3502 14.6599 14.1633 14.2046H6.87892Z" fill="currentColor"/>
            </svg>
        </>
    )
}

// NavBar Icons
export function FaveOutlineIcon() {
    return (
        <>
            <svg className={styles.nav_icon} width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M23.1089 4.31157C19.4975 -0.927472 12.7393 0.80373 12.7393 4.31157C12.7393 0.80373 5.70954 -0.534518 2.36903 4.31157C-1.24235 9.55061 2.31714 18.7282 12.7393 24C23.1608 18.7282 26.7203 9.55061 23.1089 4.31157Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M18.5 5.49997C19.8213 6.5495 19.9793 6.92014 20.5 8.49997" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}
export function FaveSolidIcon() {
    return (
        <>
            <svg className={styles.nav_icon} width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M22.1089 3.31154C18.4975 -1.9275 11.7393 -0.196301 11.7393 3.31154C11.7393 -0.196301 4.70954 -1.53455 1.36903 3.31154C-2.24235 8.55058 1.31714 17.7281 11.7393 22.9999C22.1608 17.7281 25.7203 8.55058 22.1089 3.31154ZM16.717 3.87795C17.0605 3.4455 17.6895 3.3734 18.122 3.71691C18.8011 4.25634 19.2797 4.6954 19.6424 5.26189C19.9924 5.80861 20.1978 6.42252 20.4497 7.18689C20.6226 7.71141 20.3376 8.27678 19.8131 8.44968C19.2885 8.62257 18.7232 8.33751 18.5503 7.81299C18.2815 6.99753 18.1475 6.6362 17.958 6.34027C17.7812 6.06409 17.5202 5.79306 16.878 5.28297C16.4456 4.93946 16.3735 4.31041 16.717 3.87795Z" fill="currentColor"/>
            </svg>
        </>
    )
}
export function HomeOutlineIcon() {
    return (
        <>
            <svg className={styles.nav_icon} width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.5649 8.07893L19.5773 8.09459L19.5903 8.10975C20.0038 8.59139 20.2526 9.21535 20.2526 9.89996V21.2495C20.2526 22.7686 19.0212 24 17.5021 24H14.7517V20.7161C14.7517 18.4377 12.9047 16.5907 10.6263 16.5907C8.34791 16.5907 6.50091 18.4377 6.50091 20.7161V24H3.75046C2.23142 24 1 22.7686 1 21.2495V9.89996C1 9.21535 1.24883 8.5914 1.66226 8.10976L1.67527 8.0946L1.68767 8.07894C1.75212 7.99748 1.82918 7.91733 1.92092 7.84042L1.27848 7.07408L1.92092 7.84042L9.66245 1.35056C10.22 0.883146 11.0326 0.883146 11.5901 1.35056L19.3317 7.84043C19.4234 7.91733 19.5005 7.99748 19.5649 8.07893Z" stroke="currentColor" strokeWidth="2"/>
            </svg>
        </>
    )
}
export function HomeSolidIcon({fill="currentColor"}) {
    return (
        <>
            <svg className={styles.nav_icon} width="22" height="25" viewBox="0 0 22 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.02001 0.584223C9.94921 -0.194741 11.3034 -0.194741 12.2326 0.584223L19.9741 7.07409C20.117 7.1939 20.2418 7.32274 20.3491 7.45841C20.9123 8.1145 21.2526 8.96749 21.2526 9.89996V21.2495C21.2526 23.3209 19.5735 25 17.5021 25H14.1978C13.9439 25 13.7517 24.7728 13.7517 24.519V20.7161C13.7517 18.99 12.3524 17.5908 10.6263 17.5908C8.90019 17.5908 7.50091 18.99 7.50091 20.7161V24.519C7.50091 24.7728 7.30866 25 7.0548 25H3.75046C1.67914 25 0 23.3209 0 21.2495V9.89996C0 8.9675 0.340293 8.11452 0.903467 7.45843C1.01083 7.32275 1.13556 7.1939 1.27848 7.07408L9.02001 0.584223Z" fill={fill} />
            </svg>
        </>
    )
}
export function ListOutlineIcon() {
    return (
        <>
            <svg className={styles.nav_icon} width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="1.47778" y="3.08334" width="19.875" height="20.9167" rx="3" stroke="currentColor" strokeWidth="2"/>
            <line x1="5.64453" y1="11.5" x2="17.1862" y2="11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="5.64453" y1="15.6667" x2="13.0195" y2="15.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="7.20703" y1="1" x2="7.20703" y2="4.20833" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            <line x1="15.5403" y1="1" x2="15.5403" y2="4.20833" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}
export function ListSolidIcon({fill="currentColor"}) {
    return (
        <>
            <svg className={styles.nav_icon} width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.477783 6.08334C0.477783 3.8742 2.26864 2.08334 4.47778 2.08334H18.3528C20.5619 2.08334 22.3528 3.8742 22.3528 6.08334V21C22.3528 23.2092 20.5619 25 18.3528 25H4.47778C2.26864 25 0.477783 23.2091 0.477783 21V6.08334ZM4.64453 11.5C4.64453 10.9477 5.09225 10.5 5.64453 10.5H17.1862C17.7385 10.5 18.1862 10.9477 18.1862 11.5C18.1862 12.0523 17.7385 12.5 17.1862 12.5H5.64453C5.09225 12.5 4.64453 12.0523 4.64453 11.5ZM5.64445 14.6667C5.09217 14.6667 4.64445 15.1144 4.64445 15.6667C4.64445 16.219 5.09216 16.6667 5.64445 16.6667H13.0195C13.5717 16.6667 14.0195 16.219 14.0195 15.6667C14.0195 15.1144 13.5717 14.6667 13.0195 14.6667H5.64445Z" fill={fill} />
            <line x1="7.20703" y1="1" x2="7.20703" y2="4.20833" stroke={fill} strokeWidth="2" strokeLinecap="round"/>
            <line x1="15.5403" y1="1" x2="15.5403" y2="4.20833" stroke={fill} strokeWidth="2" strokeLinecap="round"/>
            </svg>
        </>
    )
}
export function GameOutlineIcon() {
    return (
        <>
            <svg className={styles.nav_icon} width="25" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.8,15.7v-0.7l-0.6-0.3c-1.1-0.5-2-1.3-2.6-2.4C1,11.3,0.9,10.1,1.1,8.9c0.2-1.2,0.9-2.2,1.8-3 C3.9,5.2,5,4.7,6.3,4.8h0c0.3,0,0.5,0,0.8,0.1l0.8,0.1l0.3-0.8C8.4,3.2,9,2.4,9.8,1.9C10.6,1.3,11.5,1,12.5,1s1.9,0.3,2.7,0.9 s1.4,1.4,1.7,2.3l0.3,0.8L18,4.8c1.3-0.2,2.5,0.1,3.6,0.8c1.1,0.7,1.9,1.7,2.2,3c0.4,1.2,0.2,2.5-0.3,3.7c-0.5,1.2-1.5,2.1-2.7,2.6 l-0.6,0.3v0.7v2.3H4.8V15.7z" fill="none" stroke="currentColor" strokeWidth="2" />
            <path d="M4.5,24.3c-0.6-0.6-0.7-1.6-0.7-3.3h8.7h8.7c0,1.7-0.1,2.7-0.7,3.3C19.8,25,18.6,25,16.3,25H8.8 C6.4,25,5.2,25,4.5,24.3z" fill="currentColor" />
            </svg>
        </>
    )
}
export function GameSolidIcon({fill="currentColor"}) {
    return (
        <>
            <svg className={styles.nav_icon} width="25" height="25" viewBox="0 0 26 25" xmlns="http://www.w3.org/2000/svg">
            <path className="st0" d="M4.8,15.7v-0.7l-0.6-0.3c-1.1-0.5-2-1.3-2.6-2.4C1,11.3,0.9,10.1,1.1,8.9c0.2-1.2,0.9-2.2,1.8-3 C3.9,5.2,5,4.7,6.3,4.8h0c0.3,0,0.5,0,0.8,0.1l0.8,0.1l0.3-0.8C8.4,3.2,9,2.4,9.8,1.9C10.6,1.3,11.5,1,12.5,1s1.9,0.3,2.7,0.9 s1.4,1.4,1.7,2.3l0.3,0.8L18,4.8c1.3-0.2,2.5,0.1,3.6,0.8c1.1,0.7,1.9,1.7,2.2,3c0.4,1.2,0.2,2.5-0.3,3.7c-0.5,1.2-1.5,2.1-2.7,2.6 l-0.6,0.3v0.7v2.3H4.8V15.7z" fill={fill} stroke={fill} strokeWidth="2"/>
            <path className="st1" d="M3.8,20.9h17.5c0,1.7-0.1,2.7-0.7,3.3C19.8,25,18.6,25,16.3,25H8.8c-2.4,0-3.5,0-4.3-0.7 C3.9,23.6,3.8,22.7,3.8,20.9z" fill={fill} />
            </svg>
        </>
    )
}