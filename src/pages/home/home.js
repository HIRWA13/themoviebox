import "react-responsive-carousel/lib/styles/carousel.min.css";
import MovieList from "../../components/movieList/movieList";
import Header from "../../components/header/Header";

const Home = () => {
    return (
        <>
            <div className="poster">
                <Header/>
                <MovieList />
            </div>
        </>
    )
}

export default Home