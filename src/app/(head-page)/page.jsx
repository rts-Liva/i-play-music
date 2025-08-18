import albums from '@/json/albums.json';
import Link from 'next/link';
import '@/scss/pages/featured.scss';

export const metadata = {
  title: 'Featured'
};

function HomePage() {
  return (
    <>
      <h2 className="heading heading--gradient">featured</h2>
      <div className="featured-album">
        {albums?.featuredAlbums?.length > 0 ? (
          albums?.featuredAlbums?.map(album => (
            <Link href={`/albums/${album.id}`} key={album.id}>
              <article className="featured-album-card">
                <img src={album.imagePath} alt={`${album.title} cover`} className="featured-album-card__cover" />
                <section className="featured-album-card__text">
                  <h3 className="featured-album-card__title">{album.title}</h3>
                  <p className="text text--light">{album.description}</p>
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