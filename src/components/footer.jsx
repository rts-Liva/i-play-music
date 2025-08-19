'use client';

import { BiCategory } from "react-icons/bi";
import { FaCircleHalfStroke, FaCompactDisc } from "react-icons/fa6";
import { GiSoundWaves } from "react-icons/gi";
import { MdLibraryMusic } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UpdateDarkmode from "./darkmode/update-darkmode";
import SvgGradient from "./svg-gradient";
import Link from "next/link";
import '@/scss/components/footer.scss';

function Footer() {
    const pathname = usePathname().slice(1).split('/')[0];
    const current = pathname === '' ? 'featured' : pathname;
    const [isDarkmode, setIsDarkmode] = useState(true);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('darkmode');

        setIsDarkmode(savedTheme ? JSON.parse(savedTheme) : systemPrefersDark);
    }, []);

    UpdateDarkmode(isDarkmode);

    return (
        <footer className="footer">
            <nav>
                <SvgGradient />
                <ul className="footer-menu">
                    <li>
                        <Link href='/albums'>
                            <FaCompactDisc className={current === 'albums' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link href='/playlists?index=1'>
                            <MdLibraryMusic className={current === 'playlists' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                    <li>
                        <Link href='/'>
                            <GiSoundWaves className={current === 'featured' ? 'footer-menu__icon featured active' : 'footer-menu__icon featured'} />
                        </Link>
                    </li>
                    <li>
                        <FaCircleHalfStroke
                            onClick={() => setIsDarkmode(!isDarkmode)}
                            className='footer-menu__icon darkmode-btn' />
                    </li>
                    <li>
                        <Link href='/categories'>
                            <BiCategory className={current === 'categories' ? 'footer-menu__icon active' : 'footer-menu__icon'} />
                        </Link>
                    </li>
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;