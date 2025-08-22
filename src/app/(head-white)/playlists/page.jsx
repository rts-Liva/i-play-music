import Songs from "@/components/cards/songs";
import Fetch from "@/components/fetch";
import PlaylistSlider from "@/components/sliders/playlist-slider";
import '@/scss/pages/playlists.scss';

export const metadata = {
    title: 'Playlists'
};

async function PlaylistsPage({ searchParams }) {
    const { index } = await searchParams;
    const playlists = await Fetch('me/playlists');
    const tracks = await Fetch(`playlists/${playlists.items[index].id}/tracks?limit=50`);

    return (
        <>
            <div className="background"></div>
            <h2 className="heading heading--light">playlists</h2>
            <PlaylistSlider playlists={playlists.items} playlistIndex={index} />
            <section className="playlist-info">
                <h3 className="playlist-info__name">{playlists.items[index].name}</h3>
                <div className="songs">
                    {tracks.items.length > 0 ? (
                        tracks.items.map(song => (
                            <Songs song={song.track} key={song.track.id} />
                        ))
                    ) : <p className='text'>No songs found...</p>}
                </div>
                <button className="playlist-info__btn">listen all</button>
            </section>
        </>
    );
}

export default PlaylistsPage;