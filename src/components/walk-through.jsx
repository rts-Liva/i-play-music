'use client';

import { useEffect, useState } from "react";
import { BsSoundwave } from "react-icons/bs";
import { FaHeart } from "react-icons/fa6";
import { IoIosMusicalNote } from "react-icons/io";
import RenderDarkmode from "./render-darkmode";
import WalkthroughSlider from "./sliders/walk-through-slider";
import Link from "next/link";

function WalkThrough() {
    const [activeSlide, setActiveSlide] = useState(1);

    useEffect(() => {
        if (activeSlide === 3) return;

        const timer = setTimeout(() => {
            setActiveSlide(activeSlide + 1);
        }, 5000);

        return () => clearTimeout(timer);
    }, [activeSlide]);

    RenderDarkmode();

    return (
        <>
            <div className="walkthrough__slider">
                <WalkthroughSlider activeSlide={activeSlide} number={1}>where words fail,<br />music speaks</WalkthroughSlider>
                <WalkthroughSlider activeSlide={activeSlide} number={2}>no music<br />no life</WalkthroughSlider>
                <WalkthroughSlider activeSlide={activeSlide} number={3}>peace love<br />music</WalkthroughSlider>
            </div>
            <div className="walkthrough__steps">
                <BsSoundwave
                    className={`walkthrough__steps-icon ${activeSlide === 1 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(1)}
                />
                <FaHeart
                    className={`walkthrough__steps-icon ${activeSlide === 2 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(2)}
                />
                <IoIosMusicalNote
                    className={`walkthrough__steps-icon ${activeSlide === 3 ? 'active' : ''}`}
                    onClick={() => setActiveSlide(3)}
                />
            </div>
            <Link href='/' className="walkthrough__skip">{activeSlide === 3 ? 'get started' : 'skip'}</Link>
        </>
    );
}

export default WalkThrough;