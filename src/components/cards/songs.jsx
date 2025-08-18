import { FaPlay } from "react-icons/fa6";
import CalculateDuration from "@/components/calculate-duration";
import Link from "next/link";
import '@/scss/components/songs.scss';

function Songs({ song }) {
    return (
        <Link href={`/playing/${song.id}`} className="songs-card">
            <FaPlay className="songs-card__icon" />
            <div>
                <h4 className="sub-heading songs-card__heading">{song.name}</h4>
                <p className="text songs-card__artist">{song.artists.map(artist => artist.name).join(', ')}</p>
            </div>
            <p className="text songs-card__text">{CalculateDuration(song.duration_ms)}</p>
        </Link>
    );
}

export default Songs;