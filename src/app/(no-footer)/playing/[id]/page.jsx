import { FaBackward, FaForward, FaPlay } from 'react-icons/fa6';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import CalculateDuration from '@/components/calculate-duration';
import songs from '@/json/songs.json';
import '@/scss/pages/playing.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const song = songs?.songs[id - 1];

    return {
        title: song.title
    };
};

async function PlayerPage({ params }) {
    const { id } = await params;
    const song = songs?.songs[id - 1];

    return (
        <>
            <img src={song.cover} alt={`${song.title} cover`} className="music__cover" />
            <h2 className="music__title">{song.title}</h2>
            <p className="text">{song.artist}</p>
            <div className="music-player">
                <div className="music-player__progress"></div>
                <p className="text">0:00</p>
                <p className="text">{CalculateDuration(song.duration)}</p>
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