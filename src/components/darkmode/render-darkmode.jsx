'use client';

import { useEffect, useState } from "react";
import UpdateDarkmode from "./update-darkmode";

function RenderDarkmode() {
    const [isDarkmode, setIsDarkmode] = useState(true);

    useEffect(() => {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedTheme = localStorage.getItem('darkmode');

        setIsDarkmode(savedTheme ? JSON.parse(savedTheme) : systemPrefersDark);
    }, []);

    UpdateDarkmode(isDarkmode);
}

export default RenderDarkmode;