import React from 'react'
import Navbar from './component/Navbar/Navbar'
import "./App.css";
import ContactHeader from './component/ContactHeader/ContactHeader';
import ContactForm from './component/ContactForm/ContactForm';

function App() {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  )
}

export default App
