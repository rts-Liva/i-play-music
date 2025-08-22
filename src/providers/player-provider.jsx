'use client';

import { createContext, useState } from "react";

export const playerContext = createContext(null);

function PlayerProvider({ children }) {
    const [showPlayer, setShowPlayer] = useState(false);
    const [currentSong, setCurrentSong] = useState(null);

    return (
        <playerContext.Provider value={{
            showPlayer, setShowPlayer,
            currentSong, setCurrentSong,
        }}>
            {children}
        </playerContext.Provider>
    );
}

export default PlayerProvider;