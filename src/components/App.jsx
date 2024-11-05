import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactData from '../contactData.json';
import { useState, useEffect } from 'react';




export default function App() {
 const [data, setData] = useState(() => {
        try {
  const savedObj = window.localStorage.getItem("key")
        return savedObj ? JSON.parse(savedObj) : contactData
        }
        catch (error) {
            console.log(error)
            return contactData
      }
        
    })
    
    useEffect(() => {
        window.localStorage.setItem("key", JSON.stringify(data))
    }, [data])
  
  return (
    <div>
      <div>
        <ContactForm />
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <ContactList data={data} />
      </div>
    </div>
  )
}


