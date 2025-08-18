'use client';

import { useEffect, useState } from "react";

function WalkthroughSlider({ children: title, activeSlide, number }) {
    const [slidePos, setSlidePos] = useState('');

    useEffect(() => {
        setSlidePos('');
        switch (activeSlide) {
            // If activeSlide is equal to number.
            case number:
                setSlidePos('active');
                break;

            // If activeSlide is 1 bigger than number.
            case number + 1:
                setSlidePos('prev');
                break;

            // If activeSlide is 1 smaller than number.
            case number - 1:
                setSlidePos('next');
                break;

            // If activeSlide is 1, and number is 3.
            case 1:
                if (number === 3) {
                    setSlidePos('prev');
                }
                break;

            // If activeSlide is 3, and number is 1.
            case 3:
                if (number === 1) {
                    setSlidePos('next');
                }
                break;
        }
    }, [activeSlide]);

    return (
        <section className={`walkthrough__slider-element ${slidePos}`}>
            <h2 className="walkthrough__title">{title}</h2>
            <p className="walkthrough__text">Vivamus auctor dui dignissim, sollicitudin nunc ac, aliquam justo. Vestibulum pellentesque lacinia eleifend.</p>
        </section>
    );
}

export default WalkthroughSlider;