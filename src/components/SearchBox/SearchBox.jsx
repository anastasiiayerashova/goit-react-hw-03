import s from './SearchBox.module.css';
import { useId } from 'react';

export default function SearchBox() {
    const findId = useId();
    return (
        <div className={s.findDiv}>
            <label htmlFor={findId}>Find contacts by name</label>
            <input type='text' name='findName' id={findId} className={s.input}></input>
        </div>
    )
}