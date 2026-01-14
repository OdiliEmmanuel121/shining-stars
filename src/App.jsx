import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './mainpages/home/Home'
import Aboutus from './mainpages/aboutus/Aboutus'
import Schools from './mainpages/schools/Schools'
import Academics from './mainpages/academics/Academics'
import Admission from './mainpages/admission/Admission'
import Contact from './mainpages/contact/Contact'
import Navup from './mainpages/navup/Navup'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navup />
      <Routes>  
        <Route path="/" element={<Home />} />
        <Route path="/abt" element={<Aboutus />} />
        <Route path="/sch" element={<Schools />} />
        <Route path="/aca" element={<Academics />} />
        <Route path="/adm" element={<Admission />} />
        <Route path="/con" element={<Contact />} />
      </Routes>   
        {/* Your routes and components go here */}
        
      </BrowserRouter>
    </div>
  )
}

export default App