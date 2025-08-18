'use client';

import { useEffect } from "react";

function UpdateDarkmode(isDarkmode) {
    useEffect(() => {
        localStorage.setItem('darkmode', isDarkmode);

        if (isDarkmode) {
            document.body.classList.add('darkmode');
        } else {
            document.body.classList.remove('darkmode');
        }
    }, [isDarkmode]);
}

export default UpdateDarkmode;