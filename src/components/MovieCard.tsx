import { Link } from "react-router-dom";

 
 
 type Props = {
    id:number;
    poster_path:string;
    movie:string;
}



export default function MovieCard({id,poster_path, movie} : Props){

    const url : string = `https://image.tmdb.org/t/p/w300/${poster_path}`;
    return <li><Link to={`/movie/${id}`}><img src={url} alt={movie}/></Link><p>{movie}</p></li>

}