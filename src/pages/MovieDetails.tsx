import { useParams } from 'react-router-dom';
import '../styles/MovieDetailsStyle.css'
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner'
import type { Details } from '../interfaces/Details';
import {getDetails} from '../ts/httpclient';




interface Genre {
    id: number;
    name: string;
}

type Params = {
    movieId: string
}




export default function MovieDetails() {
    const {movieId} = useParams<Params>();
    const [isLoading,setIsLoading] = useState(true);
    const [movieDetails, setMovieDetails] = useState<Details | null >(null);
    const url : string= `https://image.tmdb.org/t/p/w300/${movieDetails?.poster_path}`;


    useEffect(() =>{
        const urlDetails: string = `movie/${movieId}?language=en-US`;

        setIsLoading(true);
        getDetails(urlDetails).then((data) => {
            if(data){
                setMovieDetails(data)
                setIsLoading(false)
            }else{
                console.log("error")
            }
        })

   
    },[movieId]);

    if(!movieDetails){
        return null;
    }

    if(isLoading){
        return <Spinner/>
    }
    

    return (

      

        <div className="containerDetails">
          
            <div>
                <img src={url} />
            </div>
            <div className="overview">
                <div className="details">
                    <p><strong>Title: </strong>{movieDetails?.original_title}</p>
                </div>
                <div className='details'>
                    <p> <strong>genre: </strong>
                        {
                            movieDetails?.genres.map((genre: Genre) => (genre.name)).join(", ")
                        }
                    </p>
                </div>
                <div className="details">
                    <p><strong>Overview: </strong> {movieDetails?.overview}</p>
                </div>
            </div>
            
        </div>
    )
}