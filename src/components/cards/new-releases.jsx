import Link from "next/link";

function NewReleases({ album }) {
    return (
        <Link href={`/albums/${album.id}`}>
            <article className="album-list-card">
                <img
                    src={album.imagePath}
                    alt={`${album.title} cover`}
                    className="album-list-card__cover" />
                <div>
                    <h4 className="sub-heading">{album.title}</h4>
                    <p className="text">{album.artist}</p>
                </div>
                <p className="text album-list-card__text">{album.songs} songs</p>
            </article>
        </Link>
    );
}

export default NewReleases;