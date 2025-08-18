import Fetch from "@/components/fetch";
import FeaturedAlbums from "@/components/cards/featured-albums";
import NewReleases from "@/components/cards/new-releases";
import '@/scss/pages/albums.scss';

export const metadata = {
    title: 'Albums'
};

async function AlbumsPage() {
    const featuredAlbums = await Fetch('albums?ids=6P1p6YKpnipMo8CQKfTGOB%2C0ILF2d6YqP3llZ66mD96hQ%2C1A2GTWGtFfWp7KSQTwWOyo%2C4aawyAB9vmqN3uQ7FjRGTy%2C3mufRbVLnu4dO8dP8fJRb0');
    const newAlbums = await Fetch('browse/new-releases');

    return (
        <>
            <h2 className="heading heading--gradient">all albums</h2>
            <div>
                <section className="album-menu">
                    <h3 className="sub-heading">featured albums</h3>
                    <button className="album-menu__btn">view all</button>
                </section>
                <div className="album-slider">
                    {featuredAlbums.albums.length > 0 ? (
                        featuredAlbums.albums.map(album => (
                            <FeaturedAlbums album={album} key={album.id} />
                        ))
                    ) : <p className="text">No featured albums found...</p>}
                </div>
            </div>
            <div>
                <section className="album-menu">
                    <h3 className="sub-heading">new releases</h3>
                    <button className="album-menu__btn">view all</button>
                </section>
                <div className="album-list">
                    {newAlbums.albums.items.length > 0 ? (
                        newAlbums.albums?.items?.map(album => (
                            <NewReleases album={album} key={album.id} />
                        ))
                    ) : <p className="text">No new releases found...</p>}
                </div>
            </div>
        </>
    );
}

export default AlbumsPage;