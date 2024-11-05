import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useState, useEffect } from 'react';

export default function ContactList({ data }) {
    
    return (
        <ul className={s.list}>
            {data.map((item) => {
                return <Contact key={item.id} {...item} />
            })}
        </ul>
    )
}