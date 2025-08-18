import Songs from "@/components/cards/songs";
import PlaylistSlider from "@/components/sliders/playlist-slider";
import playlists from '@/json/playlists.json';
import '@/scss/pages/playlists.scss';

export const metadata = {
    title: 'Playlists'
};

async function PlaylistsPage({ searchParams }) {
    const { index } = await searchParams;
    const playlist = playlists.list[index];

    return (
        <>
            <div className="background"></div>
            <h2 className="heading heading--light">playlists</h2>
            <PlaylistSlider playlists={playlists} playlistIndex={index} />
            <section className="playlist-info">
                <h3 className="playlist-info__name">{playlist.name}</h3>
                <div className="songs">
                    {playlist.songs.length > 0 ? (
                        playlist.songs.map(song => (
                            <Songs song={song} key={song.id} />
                        ))
                    ) : <p className='text'>No songs found...</p>}
                </div>
                <button className="playlist-info__btn">listen all</button>
            </section>
        </>
    );
}

export default PlaylistsPage;