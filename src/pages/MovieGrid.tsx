import MovieCard from '../components/MovieCard'


import type { MovieApiResponse, Movie } from '../interfaces/MovieApiResponse'
import '../styles/MovieGridStyle.css'
import { useEffect, useRef, useState } from 'react'
import { getMovies } from '../ts/httpclient'

import Spinner from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'
import {useQuery} from '../hook/useQuery';

interface MovieGridProps {
  search: string;
}


export default function MovieGrid({search} : MovieGridProps) {

    
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true)


    useEffect(() => {
    
        const url: string = search ? `search/movie?query=${search}&include_adult=false&language=en-US&page=${page}` : `discover/movie?page=${page}`;
        console.log(url)
        getMovies(url).then((data) => {
            if (data && data.results.length > 0) {

                setMovies(prevData => {
                    const nuevos = data.results.filter ( n => !prevData.some(p => p.id === n.id));
                    return [...prevData, ...nuevos];
                })
                
                setHasMore(data.page < data.total_pages);


            } else {
                setIsError(true);
            }
        })
    }, [search,page]);



    if (isError) {
        return <div> <Spinner /> Error</div>
    }



    return (
        <>




            <InfiniteScroll
                dataLength={movies.length} //This is important field to render the next data
                next={() => setPage(prevPage => prevPage + 1)}
                hasMore={hasMore}
                loader={<Spinner />}
                style={{ overflowY: 'hidden' }}
            >

                <ul className="container">
                    {
                        movies.map((movie: Movie) => {
                            return <MovieCard key={movie.id} id={movie.id} poster_path={movie.poster_path} movie={movie.original_title} />
                        })
                    }
                </ul></InfiniteScroll>


        </>
    )
}