'use client';

import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack, IoIosSearch } from "react-icons/io";
import RenderDarkmode from "./render-darkmode";
import '@/scss/components/header.scss';

function Header({ colour = 'dark', navigateReturn = true, search = true }) {
    const router = useRouter();
    const pathname = usePathname().slice(1).split('/')[0];
    const title = pathname === '' ? 'Featured' : pathname;

    RenderDarkmode();

    return (
        <header className="header">
            {navigateReturn && (
                <IoIosArrowBack
                    onClick={() => router.back()}
                    className={colour === 'dark' ? 'header__icon' : 'header__icon header__icon--light'}
                />
            )}
            <h1 className={colour === 'dark' ? 'header__title' : 'header__title header__title--light'}>{title}</h1>
            {search && <IoIosSearch className={colour === 'dark' ? 'header__icon' : 'header__icon header__icon--light'} />}
        </header>
    );
}

export default Header;