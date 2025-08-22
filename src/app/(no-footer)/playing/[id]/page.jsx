import { FaBackward, FaForward, FaPlay } from 'react-icons/fa6';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import Fetch from '@/components/fetch';
import CalculateDuration from '@/components/calculate-duration';
import '@/scss/pages/playing.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const song = await Fetch(`tracks/${id}`);

    return {
        title: song.name
    };
};

async function PlayerPage({ params }) {
    const { id } = await params;
    const song = await Fetch(`tracks/${id}`);

    return (
        <>
            <img src={song.album.images[0].url} alt={`${song.name} cover`} className="music__cover" />
            <h2 className="music__title">{song.name}</h2>
            <p className="text">{song.artists.map(artist => artist.name).join(', ')}</p>
            <div className="music-player">
                <div className="music-player__progress"></div>
                <p className="text">0:00</p>
                <p className="text">{CalculateDuration(song.duration_ms)}</p>
            </div>
            <div className="music-control">
                <MdSkipPrevious className="music-control__btn music-control__btn--gradient" />
                <FaBackward className="music-control__btn" />
                <FaPlay className="music-control__btn music-control__btn--center play" />
                <FaForward className="music-control__btn" />
                <MdSkipNext className="music-control__btn music-control__btn--gradient" />
            </div>
        </>
    );
}

export default PlayerPage;