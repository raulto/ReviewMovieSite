import Search from "../components/Search";
import { useQuery } from "../hook/useQuery";
import MovieGrid from "./MovieGrid";

export default function LandingPage(){

        const query = useQuery();
        const search:String = query.get("search") ?? "";
    return(
        <div>
            <Search></Search>
            <MovieGrid key={search} search={search}></MovieGrid>
        </div>
    )
}