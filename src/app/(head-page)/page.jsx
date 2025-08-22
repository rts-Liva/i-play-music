import Fetch from '@/components/fetch';
import Link from 'next/link';
import '@/scss/pages/featured.scss';

export const metadata = {
  title: 'Featured'
};

async function HomePage() {
  const featuredAlbums = await Fetch('albums?ids=6P1p6YKpnipMo8CQKfTGOB%2C0ILF2d6YqP3llZ66mD96hQ%2C1A2GTWGtFfWp7KSQTwWOyo%2C4aawyAB9vmqN3uQ7FjRGTy%2C3mufRbVLnu4dO8dP8fJRb0');

  return (
    <>
      <h2 className="heading heading--gradient">featured</h2>
      <div className="featured-album">
        {featuredAlbums.albums.length > 0 ? (
          featuredAlbums.albums.map(album => (
            <Link href={`/albums/${album.id}`} key={album.id}>
              <article className="featured-album-card">
                <img src={album.images[0].url} alt={`${album.name} cover`} className="featured-album-card__cover" />
                <section className="featured-album-card__text">
                  <h3 className="featured-album-card__title">{album.name}</h3>
                  <p className="text text--light">{album.album_type}</p>
                </section>
              </article>
            </Link>
          ))
        ) : <p className="text">No featured albums found...</p>}
      </div>
    </>
  );
}

export default HomePage;