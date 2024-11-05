import s from './Contact.module.css';
import { FaUser } from "react-icons/fa6";
import { MdLocalPhone } from "react-icons/md";
import { LuMinus } from "react-icons/lu";

export default function Contact({ id, name, number, onDelete }) {
   
    return (
        <div className={s.item}>
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
            <button className={s.btn} type='button' onClick={() => {
                onDelete(id)
            }}>Delete<LuMinus /></button>
        </div>
    )
}