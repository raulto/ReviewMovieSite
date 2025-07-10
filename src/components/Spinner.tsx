import { FaSpinner } from "react-icons/fa";
import styles from './Spinner.module.css'

export default function Spinner(){
    return <span><FaSpinner className={styles.spinner} size={100} /></span>
}