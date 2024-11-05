import s from './Contact.module.css';
import { FaUser } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";

export default function Contact({id, name, number}) {
    return (
        <li className={s.item}>
            <div className={s.itemDiv}>  
                <div className={s.iconsDiv}>  
                    <FaUser />
                    <p className={s.name}>{name}</p>
                </div>
                <div className={s.iconsDiv}>  
                    <MdLocalPhone />
  <p className={s.phone}>{number}</p>
                </div>
              
                </div>
            <button type='submit'>Delete</button>
        </li>
    )
}