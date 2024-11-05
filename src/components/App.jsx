import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactData from '../contactData.json';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';



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
  
  const initialValues = {
    id: nanoid(),
    name: '',
    number: '',
}

const handleSubmit = (values, actions) => {
  setData((prev) => {
      return [...prev, values]
    })
    actions.resetForm();
  }
  
  const handleDelete = (contactId) => {
    setData((prev) => {
      return prev.filter((contact) => {
      return contact.id !== contactId
  })
})
  }
  return (
    <div>
      <div>
        <ContactForm initialValues={initialValues} handleSubmit={handleSubmit} />
      </div>
      <div>
        <SearchBox />
      </div>
      <div>
        <ContactList data={data} onDelete={handleDelete} />
      </div>
    </div>
  )
}


