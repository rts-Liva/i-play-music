import { FaPlay } from "react-icons/fa6";
import CalculateDuration from "@/components/calculate-duration";
import '@/scss/components/songs.scss';
import Link from "next/link";

function Songs({ song }) {

    return (
        <Link href={`/playing/${song.id}`} className="songs-card">
            <FaPlay className="songs-card__icon" />
            <div>
                <h4 className="sub-heading">{song.title}</h4>
                <p className="text">{song.artist}</p>
            </div>
            <p className="text songs-card__text">{CalculateDuration(song.duration)}</p>
        </Link>
    );
}

export default Songs;