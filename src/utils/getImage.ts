import noimg from '../assets/noimg.jpg';


export default function getImage(width:number,img:string){

    return  img ? `https://image.tmdb.org/t/p/w${width}/${img}` : noimg;


}