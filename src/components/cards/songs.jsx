'use client';

import { useContext } from "react";
import { playerContext } from "@/providers/player-provider";
import { FaPlay } from "react-icons/fa6";
import CalculateDuration from "@/components/calculate-duration";
import '@/scss/components/songs.scss';

function Songs({ song }) {
    const { setShowPlayer, setCurrentSong } = useContext(playerContext);

    function clickHandler(e) {
        setShowPlayer(true);
        setCurrentSong(song);
    }

    return (
        <button onClick={clickHandler} className="songs-card">
            <FaPlay className="songs-card__icon" />
            <div>
                <h4 className="sub-heading songs-card__heading">{song.name}</h4>
                <p className="text songs-card__artist">{song.artists.map(artist => artist.name).join(', ')}</p>
            </div>
            <p className="text songs-card__text">{CalculateDuration(song.duration_ms)}</p>
        </button>
    );
}

export default Songs;