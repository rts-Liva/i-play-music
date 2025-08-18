import Fetch from '@/components/fetch';
import Songs from '@/components/cards/songs';
import '@/scss/pages/details.scss';

export async function generateMetadata({ params }) {
    const { id } = await params;
    const album = await Fetch(`albums/${id}`);

    return {
        title: album.name
    };
};

async function AlbumDetailsPage({ params }) {
    const { id } = await params;
    const album = await Fetch(`albums/${id}`);

    return (
        <>
            <div className="details">
                <img src={album.images[0].url} alt={`${album.name} cover`} className="details__cover" />
                <section>
                    <h2 className="heading heading--light">{album.name}</h2>
                    <p className="sub-heading sub-heading--light">{album.total_tracks} songs</p>
                </section>
            </div>
            <section className="playlist-info">
                <h3 className="sub-heading details__sub-heading">all songs</h3>
                <div className="songs">
                    {album.tracks.items.length > 0 ? (
                        album.tracks.items.map(song => (
                            <Songs song={song} key={song.id} />
                        ))
                    ) : <p className='text'>No songs found...</p>}
                </div>
            </section>
        </>
    );
}

export default AlbumDetailsPage;