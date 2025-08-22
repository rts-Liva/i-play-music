'use client';

import { useEffect, useState } from "react";

function UseDebounce(value, delay = 300) {
    const [debounceValue, setDebounceValue] = useState(value);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay);

        return () => clearTimeout(timer);
    }, [value, delay]);

    return debounceValue;
};

export default UseDebounce;