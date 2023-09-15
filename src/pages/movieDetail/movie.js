import React, {useEffect, useState} from "react"
import "./movie.css"
import { useParams } from "react-router-dom"

const Movie = () => {
    const [currentMovieDetail, setMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        getData()
        window.scrollTo(0,0)
    }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovie(data))
    }

    const changeColor = (e) => {
        if(e.target.style.color === "red") {
            e.target.style.color = "#d2c9c9"
        } else {
            e.target.style.color = "red"
        }
    }

    return (
        <div className="movie p-5">
            <div className="relative movie__intro">
                <img className="h-[500px] w-full" src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.backdrop_path : ""}`} />
            </div>
            <div className="movie__detail">
                <div className="movie__detailLeft">
                    <div className="movie__posterBox">
                        <img className="shadow-lg rounded-md " src={`https://image.tmdb.org/t/p/original${currentMovieDetail ? currentMovieDetail.poster_path : ""}`} />
                    </div>
                </div>
                <div className="movie__detailRight">
                    <div className="movie__detailRightTop">
                        <div className="text-white text-4xl font-semibold" data-testid= {"movie-title"}>{currentMovieDetail ? currentMovieDetail.original_title : ""}</div>
                        <div className="text-white">{currentMovieDetail ? currentMovieDetail.tagline : ""}</div> 
                        <div className="flex items-center gap-8">
                        <div className="text-white" data-testid={"movie-runtime"}>{currentMovieDetail ? currentMovieDetail.runtime + " mins" : ""}</div>
                        <span onClick={changeColor} className=""><i  className="fas fa-heart cursor-pointer text-[#d2c9c9] text-2xl"/></span>
                        </div>
                        <div className="text-white" data-testid={"movie-release-date"}>{currentMovieDetail ? "Release date: " + currentMovieDetail.release_date : ""}</div>
                    </div>
                    <div className="movie__detailRightBottom ">
                        <div className="text-black text-3xl">Overview</div>
                        <div data-testid={"movie-overview"}>{currentMovieDetail ? currentMovieDetail.overview : ""}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Movie