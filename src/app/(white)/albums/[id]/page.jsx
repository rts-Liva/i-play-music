import Songs from '@/components/cards/songs';
import details from '@/json/details.json';
import '@/scss/pages/details.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const album = details?.albums[id - 1];

    return {
        title: album.title
    };
};

async function AlbumDetailsPage({ params }) {
    const { id } = await params;
    const album = details?.albums[id - 1];

    return (
        <>
            <div className="details">
                <img src={album.imagePath} alt={`${album.title} cover`} className="details__cover" />
                <section>
                    <h2 className="heading heading--light">{album.title}</h2>
                    <p className="sub-heading sub-heading--light">{album.songs.length} songs</p>
                </section>
                <div>
                    <p className="text text--light">genres hashtags</p>
                    <ul className="details__list">
                        {album.genres.length > 0 ? (
                            album.genres.map((genre, index) => (
                                <li key={index} className="details__list-item">#{genre}</li>
                            ))
                        ) : <p className='text'>No genres hashtags found...</p>}
                    </ul>
                </div>
            </div>
            <section className="playlist-info">
                <h3 className="sub-heading details__sub-heading">all songs</h3>
                <div className="songs">
                    {album.songs.length > 0 ? (
                        album.songs.map(song => (
                            <Songs song={song} key={song.id} />
                        ))
                    ) : <p className='text'>No songs found...</p>}
                </div>
            </section>
        </>
    );
}

export default AlbumDetailsPage;