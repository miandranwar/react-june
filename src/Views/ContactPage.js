import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarked } from "react-icons/fa";
import '../CustomStyle.css'

function ContactPage() {
    return (
        <div className="w-full mb-8">
            <h1 className="text-red-500 text-2xl mt-12 md:text-4xl lg:text-6xl text-center">Contact Page</h1>
            <div className="contact bg-yellow-500 w-1/2 mx-auto mt-8 p-8 md:text-lg md:w-1/4 md:p-16">
                <p className="my-4"><FaMapMarked color="red"/> Salford Manchester, UK</p>
                <p className="my-4"><a href="mailto:miandranwarg@gmail.com" ><FaEnvelope color="white"/> miandranwarg@gmail.com</a></p>
                <p className="my-4"><a href="tel:07900558431" ><FaPhone color="red"/> +44 7900558431</a></p>
            </div>
        </div>
    )
}

export default ContactPage
