import { useParams } from 'react-router-dom';
import '../styles/MovieDetailsStyle.css'
import { useEffect, useState } from 'react';
import Spinner from '../components/Spinner'
import type { Details } from '../interfaces/Details';
import {getDetails} from '../utils/httpclient';
import getImage from '../utils/getImage';




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
                <img src={getImage(500,movieDetails?.poster_path)} width={300} height={450}  />
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