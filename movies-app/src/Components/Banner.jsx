import axios from "axios"
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";

export default function Banner(){

    let [movieObj,setMovieObj] = useState({});

    useEffect(()=>{

        axios.get("https://api.themoviedb.org/3/trending/movie/day?api_key=ab1b1e2e84298b61b9bd795e1cb7d20c")
        .then(function(response){
            // console.log(response.data.results);
            let movies = response.data.results;
            let randomMovie = movies[Math.floor(20*Math.random())];
            // console.log(randomMovie);
            setMovieObj(randomMovie);
    
    })

    },[])
    
    if (movieObj.poster_path === undefined){
        

        return (
        <Skeleton width={1600} height={800} />
      )
    }


    return(
        <div className="h-[90vh] bg-cover bg-center flex items-end"
            style ={{backgroundImage: `url(https://image.tmdb.org/t/p/original${movieObj.poster_path})`}}
        >
            <div className="bg-stone-900/60 w-full text-center p-4 text-3xl text-white">
                {movieObj.original_title}
            </div>
        </div>
    )
}