import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useState, useEffect } from 'react';

export default function ContactList({ data, onDelete }) {
    console.log(data)
  return (
    <ul className={s.list}>
      {data.map((item) => (
        <li key={item.id}>  
          <Contact {...item} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
}