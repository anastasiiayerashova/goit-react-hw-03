import s from './ContactList.module.css';
import Contact from '../Contact/Contact';

export default function ContactList({ data, onDelete }) {
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