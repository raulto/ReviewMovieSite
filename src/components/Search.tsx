import style from './Search.module.css'
import { FaSearch } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import {useQuery} from '../hook/useQuery';



export default function Search() {
    const query = useQuery();
    const search = query.get('search');
    const [searchText,setSearchText] =  useState("");
    const history = useNavigate()
    const handleSubmit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        history(`/?search=${searchText}`);
    }

    useEffect(()=>{
        setSearchText(search || "");
    },[search])

    return (
        <div >
        <form className={style.containerForm} onSubmit={handleSubmit}>
            <input className={style.inputSearch} type="text" placeholder="Search Movie" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
            <button className={style.buttonSearch} type="submit">
                <FaSearch className="iconoSearch" />
             </button>
        </form>
        </div>
    )
}