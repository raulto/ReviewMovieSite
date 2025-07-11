import { Link } from "react-router-dom";
import getImage from "../utils/getImage";

 
 
 type Props = {
    id:number;
    poster_path:string;
    movie:string;
}



export default function MovieCard({id,poster_path, movie} : Props){



    return <li><Link to={`/movie/${id}`}><img src={getImage(300, poster_path)} width={300} height={450} alt={movie}/></Link><p>{movie}</p></li>

}