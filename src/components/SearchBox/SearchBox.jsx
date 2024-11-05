import s from './SearchBox.module.css';
import { useId } from 'react';
import { FiSearch } from "react-icons/fi";

export default function SearchBox({value, onFilter}) {
    const findId = useId();
    return (
        <div className={s.findDiv}>
            <label htmlFor={findId} className={s.label}>Find contacts by name<FiSearch /></label>
            <input type='text' name='findName' id={findId} className={s.input} value={value} onChange={e => onFilter(e.target.value)}></input>
        </div>
    )
}