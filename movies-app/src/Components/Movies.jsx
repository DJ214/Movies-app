import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";


export default function Movies(props){
    

    let {watchList,handleAddToWatchList,handleRemoveFromWatchList,currentPage,handleNext,handlePrev,totalPages,
        onPageChanges,calculatePagesToShow} = props;
    let [movies,setMovies] = useState(undefined);
    

    

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=ab1b1e2e84298b61b9bd795e1cb7d20c&page=${currentPage}`) 
        .then(function(response){
            // console.log(response.data.results);
            setMovies(response.data.results);
        });    

    },[currentPage])

    //This is known as conditional rendering , one defined below

    // It is early return if initially the movie contains empty so it will return 
    if (movies === undefined){
        return(
            <div>Loading....</div> // write shimmer effect UI here
        )
        
    }

    // console.log(movies)

    return (
        <div className="flex-auto p-3">
          <div className="text-3xl font-bold text-center p-3">Trending Movies</div>
    
          <div className="flex flex-wrap gap-4 justify-evenly">
            {movies.map((mObject) => {
              return (
                <MovieCard
                  movieObj={mObject}
                  key={mObject.id}
                  title={mObject.title}
                  watchList={watchList}
                  poster_path={mObject.poster_path}
                  handleAddToWatchList={handleAddToWatchList}
                  handleRemoveFromWatchList={handleRemoveFromWatchList}
                />
              );
            })}
          </div>
    
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChanges={onPageChanges}
            calculatePagesToShow={calculatePagesToShow}
            handleNext={handleNext}
            handlePrev={handlePrev}
          />
        </div>
      );
    }