import FeaturedAlbums from "@/components/cards/featured-albums";
import NewReleases from "@/components/cards/new-releases";
import albums from '@/json/albums.json';
import '@/scss/pages/albums.scss';

export const metadata = {
    title: 'Albums'
};

function AlbumsPage() {
    return (
        <>
            <h2 className="heading heading--gradient">all albums</h2>
            <div>
                <section className="album-menu">
                    <h3 className="sub-heading">featured albums</h3>
                    <button className="album-menu__btn">view all</button>
                </section>
                <div className="album-slider">
                    {albums?.featuredAlbums?.length > 0 ? (
                        albums?.featuredAlbums?.map(album => (
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
                    {albums?.newReleases?.length > 0 ? (
                        albums?.newReleases?.map(album => (
                            <NewReleases album={album} key={album.id} />
                        ))
                    ) : <p className="text">No new releases found...</p>}
                </div>
            </div>
        </>
    );
}

export default AlbumsPage;