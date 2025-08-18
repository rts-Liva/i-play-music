'use client';

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function PlaylistSlider({ playlists, playlistIndex }) {
    const [touchStart, setTouchStart] = useState(null);
    const [touchEnd, setTouchEnd] = useState(null);
    const [activeIndex, setActiveIndex] = useState(Number(playlistIndex));
    const sliderRef = useRef(null);

    const router = useRouter();

    // Minimum swipe distance (in px)
    const minSwipeDistance = 20;

    function onTouchStart(e) {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    function onTouchMove(e) {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    function onTouchEnd() {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe && activeIndex < playlists.list.length - 1) {
            setActiveIndex(activeIndex + 1);
        }

        if (isRightSwipe && activeIndex > 0) {
            setActiveIndex(activeIndex - 1);
        }

        // Reset
        setTouchStart(null);
        setTouchEnd(null);
    };

    function slidePosition(index) {
        switch (activeIndex) {
            // If activeIndex is equal to index.
            case index:
                return 'active';

            // If activeIndex is 1 bigger than index.
            case index + 1:
                return 'prev';

            // If activeIndex is 1 smaller than index.
            case index - 1:
                return 'next';
        }

        if (activeIndex > index) {
            return 'outside-prev';
        }

        if (activeIndex < index) {
            return 'outside-next';
        }
    }

    useEffect(() => {
        router.push(`/playlists?index=${activeIndex}`);
    }, [activeIndex]);

    return (
        <div
            className="playlist-slider"
            ref={sliderRef}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
        >
            {playlists?.list?.length > 0 ? (
                playlists?.list?.map((playlist, index) => (
                    <img
                        src={playlist.cover}
                        alt={`${playlist.name} cover`}
                        key={playlist.id}
                        className={`playlist-slider__cover ${slidePosition(index)}`} />
                ))
            ) : <p className="text">No playlists found...</p>}
        </div>
    );
}

export default PlaylistSlider;