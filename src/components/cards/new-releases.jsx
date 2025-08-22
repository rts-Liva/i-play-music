import Link from "next/link";

function NewReleases({ album }) {
    return (
        <Link href={`/albums/${album.id}`}>
            <article className="album-list-card">
                <img
                    src={album.images[0].url}
                    alt={`${album.name} cover`}
                    className="album-list-card__cover" />
                <div>
                    <h4 className="sub-heading album-list-card__heading">{album.name}</h4>
                    <p className="text album-list-card__artist">{album.artists.map(artist => artist.name).join(', ')}</p>
                </div>
                <p className="text album-list-card__text">{album.total_tracks} songs</p>
            </article>
        </Link>
    );
}

export default NewReleases;