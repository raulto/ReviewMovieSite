import type { MovieApiResponse} from '../interfaces/MovieApiResponse';

import type { Details } from '../interfaces/Details';

const token: string= 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjOTM1MmNiYzFmNDYyNDNiMDE3MTRhNDQ3NzY5ZWNmZiIsIm5iZiI6MTc1MTQyMjQxMC42OTUwMDAyLCJzdWIiOiI2ODY0OTVjYTcwNDJhZDM4MzlmODQxMzQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.5Z0h253tbbguBO3DsuGiGDwmkSWnv0ihladNrF3zeiA';

export async function getMovies(url:string): Promise<MovieApiResponse | undefined>{
    try{
        
        const moviesFromAPI =  await fetch(`https://api.themoviedb.org/3/${url}`, {
                    headers:{
                          Authorization:`Bearer ${token}`,
                            "Content-Type": "application/json"
                          }
                })
                const json = await moviesFromAPI.json();
                return json as MovieApiResponse;
      
    }catch(error){
    console.log('Error interno:', error);
    return undefined;
    }
}


    export async function getDetails(url:string): Promise<Details | undefined>{
    try{
        
        const detailsFromApi =  await fetch(`https://api.themoviedb.org/3/${url}`, {
                    headers:{
                          Authorization:`Bearer ${token}`,
                            "Content-Type": "application/json"
                          }
                })
                const json = await detailsFromApi.json();
                return json as Details;
      
    }catch(error){
    console.error('Error interno:', error);
    return undefined;
    }
}


    
      

