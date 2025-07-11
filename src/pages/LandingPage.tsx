import useDebounce  from "../hook/useDebounce";
import Search from "../components/Search";
import useQuery  from "../hook/useQuery";
import MovieGrid from "./MovieGrid";

export default function LandingPage(){

        const query = useQuery();
        const search:string = query.get("search") ?? "";
        const debounce = useDebounce(search, 3000);
    return(
        <div>
            <Search></Search>
            <MovieGrid key={debounce} debounce={debounce}></MovieGrid>
        </div>
    )
}