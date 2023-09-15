import { useEffect, useState } from "react";

function Header() {
    const [banner, setBanner] = useState([])
    const getBanner = async () => {
        const movieBanner = await fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=ded939c710a0b4764abc9b2e9c5f4890");
        const Banner = await movieBanner.json();
        setBanner(Banner.results[Math.round(Math.random()*10)])
    }
    useEffect(() => {
        getBanner();
      }, []);

    return (
        <div className="bg-blue-400 relative z-0">
            <header className="flex justify-between p-5 px-20 z-10 absolute w-full">
                <div className="flex items-center gap-2">
                    {/* <img src ={tv} alt="tv"/> */}
                    <h2 className="text-white text-2xl uppercase">movie box</h2>
                </div>
                <div className="flex justify-between items-center  border-2 border-white w-2/4 p-1 rounded-md">
                    <h2 className="text-white">what do you want to watch?</h2>
                    {/* <img className="h-5 w-5" src={search} alt="search"/> */}
                </div>
                <div className="flex items-center gap-3">
                    <h2 className="text-white text-2xl capitalize">sign in</h2>
                    {/* <img className="w-10 h-10" src={menu} alt="menu"/> */}
                </div>
            </header>
            <section className="w-2/5 absolute z-20 top-48 p-5 px-20 space-y-2">
                <h2 className="text-white text-4xl">{banner.original_title}</h2>
                <p className="text-white">{banner.overview}</p>
                <button  className="text-white bg-primary py-2 px-6 rounded-md">watch trailer</button>
            </section>
          <div className="">
            <img className="w-full h-2/5" src={`https://image.tmdb.org/t/p/w500${banner.backdrop_path}`} alt=""/>
            <div className="absolute top-0 text-white bg-blue-950 w-full h-full opacity-60"></div>
          </div>
        </div>
    );
}

export default Header