import React from "React"
import { Routes,Route } from "react-router-dom"
import ContactForm from "./ContactForm"
import BlogList from "./BlogList"

export default function AllRoutes(){
    return (
        <Routes>
            <Route path='/contact' element={<ContactForm />} />
            <Route path="/" element={<BlogList />} />
        </Routes>
    )
}
