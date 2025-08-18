import Link from "next/link";

function FeaturedAlbums({ album }) {
    return (
        <Link href={`/albums/${album.id}`}>
            <img
                src={album.imagePath}
                alt={`${album.title} cover`}
                className="album-slider__cover" />
        </Link>
    );
}

export default FeaturedAlbums;