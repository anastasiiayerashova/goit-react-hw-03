import './App.css';
import ContactForm from './ContactForm/ContactForm';
import SearchBox from './SearchBox/SearchBox';
import ContactList from './ContactList/ContactList';
import contactData from '../contactData.json';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

export default function App() {

  const [filter, setFilter] = useState('');
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
    setData((prev) => prev.filter((contact) => contact.id !== contactId));
};

  const visibleContacts = data.filter((data) => {
      return data.name.toLowerCase().includes(filter.toLowerCase())
    })
  
  return (
    <div className='mainWrapper'>
        <ContactForm initialValues={initialValues} handleSubmit={handleSubmit} />
        <SearchBox value={filter} onFilter={setFilter} />
        <ContactList data={visibleContacts} onDelete={handleDelete} />
    </div>
  )
}