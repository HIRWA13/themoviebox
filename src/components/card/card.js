import React, {useEffect, useState} from "react"
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
// import "./card.css"
import { Link } from "react-router-dom"

const Cards = ({movie}) => {

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

  

    return <>
    {
        isLoading
        ?
        <div className="grid grid-cols-4">
            <SkeletonTheme color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="grid grid-cols-1 grid-rows-1 relative shadow-md hover:shadow-2xl transition-all duration-100 ease-in z-0" data-testid= {"movie-card"}>
               <div className="">
                    <img className="" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} data-testid= {"movie-poster"}/>
               </div>
                <div className="p-4 h-28 absolute bg-white bottom-0 w-full opacity-80">
                    <div className="text-black text-lg font-semibold" data-testid= {"movie-title"}>{movie?movie.original_title:""}</div>
                    <div className="text-black flex justify-between" data-testid= {"movie-release-date"}>
                        {movie?movie.release_date:""}
                    </div>
                </div>
            </div>
        </Link>
    }
    </>
}

export default Cards