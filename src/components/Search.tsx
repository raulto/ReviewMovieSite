import style from './Search.module.css'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';



export default function Search() {


    const history = useNavigate()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
    }



    return (
        <div >
        <form className={style.containerForm} onSubmit={handleSubmit}>
            <input className={style.inputSearch} type="text" placeholder="Search Movie" onChange={(e) => {

                const valueSearch  = e.target.value;
                history(`/?search=${valueSearch}`);

            }} />
            <button className={style.buttonSearch} type="submit">
                <FaSearch className="iconoSearch" />
             </button>
        </form>
        </div>
    )
}