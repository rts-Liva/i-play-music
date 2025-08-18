import Fetch from "@/components/fetch";
import '@/scss/pages/categories.scss';

export const metadata = {
    title: 'Categories'
};

async function CategoriesPage() {
    const genres = await Fetch('browse/categories');

    return (
        <>
            <h2 className="heading heading--gradient">categories</h2>
            <div className="genre-list">
                {genres?.categories.items.length > 0 ? (
                    genres?.categories.items.map(genre => (
                        <details className="genre-list__details" name="genres" key={genre.id}>
                            <summary className="genre-list__name">{genre.name}</summary>
                            {/* {genre.subgenres.length > 0 ? (
                                genre.subgenres.map((subgenre, index) => (
                                    <div className="genre-list__subgenre" key={index}>
                                        <p className="genre-list__subgenre-name">{subgenre}</p>
                                        <IoIosArrowForward className="genre-list__subgenre-icon" />
                                    </div>
                                ))
                            ) : <p className='text'>No sub-genres found...</p>} */}
                        </details>
                    ))
                ) : <p className='text'>No categories found...</p>}
            </div>
        </>
    );
}

export default CategoriesPage;