import Link from "next/link";

function FeaturedAlbums({ album }) {
    return (
        <Link href={`/albums/${album.id}`}>
            <img
                src={album.images[0].url}
                alt={`${album.name} cover`}
                className="album-slider__cover" />
        </Link>
    );
}

export default FeaturedAlbums;