'use client';

import { useContext, useEffect, useReducer, useRef } from 'react';
import { FaPause, FaPlay } from 'react-icons/fa6';
import { playerContext } from '@/providers/player-provider';
import Reducer from './utils/reducer';
import UseDebounce from './utils/debounce';
import CalculateDuration from './calculate-duration';
import '@/scss/components/player.scss';

function Player() {
    const { showPlayer, currentSong } = useContext(playerContext);
    const [playerState, dispatch] = useReducer(Reducer, {
        isPaused: false,
        isSeeking: false,
        duration: 0,
        position: 0,
        localPosition: 0,
    });

    const debouncedPosition = UseDebounce(playerState.localPosition);
    const controlRef = useRef();
    const embedControllerRef = useRef(null);

    useEffect(() => {
        if (playerState.isSeeking) return;
        dispatch({ type: 'setLocalPosition', localPosition: playerState.position });

    }, [playerState.position, playerState.isSeeking]);

    useEffect(() => {
        if (playerState.isSeeking && debouncedPosition !== playerState.position) {
            embedControllerRef?.current?.seek(Math.floor(debouncedPosition / 1000));
            dispatch({ type: 'setIsSeeking', isSeeking: false });
        };

    }, [debouncedPosition, playerState.position]);

    useEffect(() => {
        window.onSpotifyIframeApiReady = (IFrameAPI) => {
            const options = {
                uri: currentSong.uri,
                width: 0,
                height: 0
            };

            const callback = (EmbedController) => {
                embedControllerRef.current = EmbedController;
                EmbedController.play();

                EmbedController.addListener('playback_update', e => {
                    dispatch({ type: 'setIsPaused', isPaused: e.data.isPaused });
                    dispatch({ type: 'setTiming', position: e.data.position, duration: e.data.duration });

                    if (e.data.duration === e.data.position) {
                        dispatch({ type: 'setIsPaused', isPaused: true });
                    };
                });
            };

            IFrameAPI.createController(controlRef.current, options, callback);
        };

    }, [currentSong]);

    function onControllerClick() {
        if (!embedControllerRef.current) return;
        embedControllerRef.current.togglePlay();
    }

    function changePlaybackTiming(e) {
        if (!embedControllerRef.current) return;
        const newTime = e.target.value;
        dispatch({ type: 'setIsSeeking', isSeeking: true });
        dispatch({ type: 'setLocalPosition', localPosition: newTime });
    }

    return showPlayer ? (
        <div className="media">
            <div className='media-player'>
                <div id="embed-iframe" ref={controlRef}></div>
                <script src="https://open.spotify.com/embed/iframe-api/v1" async></script>
                <div className="media-player__info">
                    <img src={currentSong?.album.images[0].url} alt={`${currentSong?.name} cover`} className="media-player__cover" />
                    <section>
                        <h2 className="sub-heading sub-heading--light">{currentSong?.name}</h2>
                        <p className="text text--light">{currentSong?.artists.map(artist => artist.name).join(', ')}</p>
                    </section>
                </div>
                {playerState.isPaused && <FaPlay className="media-player__play" onClick={onControllerClick} />}
                {!playerState.isPaused && <FaPause className="media-player__play" onClick={onControllerClick} />}
            </div>
            <div className="media-timer">
                <input
                    type="range"
                    name="playback-bar"
                    id="playback-bar"
                    className='media-timer__playback'
                    onChange={changePlaybackTiming}
                    value={playerState.position}
                    max={playerState.duration} />

                <span className='text text--light'>{CalculateDuration(playerState.duration - playerState.position)}</span>
            </div>
        </div>
    ) : null;
}

export default Player;