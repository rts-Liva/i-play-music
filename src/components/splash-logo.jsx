'use client';

import { useEffect, useState } from "react";
import UpdateDarkmode from "./darkmode/update-darkmode";

function SplashLogo() {
    const [isDarkmode, setIsDarkmode] = useState(true);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('darkmode');

        setIsDarkmode(savedTheme ? JSON.parse(savedTheme) : systemPrefersDark);
    }, []);

    UpdateDarkmode(isDarkmode);

    return (
        <>
            {isDarkmode && <div className="splash__logo splash__logo--dark"></div>}
            {!isDarkmode && <div className="splash__logo splash__logo--light"></div>}
        </>
    );
}

export default SplashLogo;