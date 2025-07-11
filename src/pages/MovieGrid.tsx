import MovieCard from '../components/MovieCard'


import type { Movie } from '../interfaces/MovieApiResponse'
import '../styles/MovieGridStyle.css'
import { useEffect,useState } from 'react'
import { getMovies } from '../utils/httpclient'

import Spinner from '../components/Spinner'
import InfiniteScroll from 'react-infinite-scroll-component'

interface MovieGridProps {
  debounce: string;
}


export default function MovieGrid({debounce} : MovieGridProps) {

    
    const [movies, setMovies] = useState<Movie[]>([]);
    const [isResults, setIsResults] = useState(false);
    const [page, setPage] = useState(1);
    const [hasMore,setHasMore] = useState(true)


    useEffect(() => {
    
        const url: string = debounce ? `search/movie?query=${debounce}&include_adult=false&language=en-US&page=${page}` : `discover/movie?page=${page}`;
        console.log(url)
        getMovies(url).then((data) => {
            if (data && data.results.length > 0) {

                setMovies(prevData => {
                    const nuevos = data.results.filter ( n => !prevData.some(p => p.id ===  n.id));
                    return [...prevData, ...nuevos];
                })
                
                setHasMore(data.page < data.total_pages);


            } else {
                setIsResults(true);
            }
        })
    }, [debounce,page]);



    if (isResults) {
        return <p>No results</p>
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