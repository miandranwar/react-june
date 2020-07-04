import React from 'react'
import '../App.css'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";


function Social() {
    return (
        <div className="p-4 text-2xl flex justify-center ">
            <span className="mx-3 hover:text-blue-600"><a href="https://facebook.com"><FaFacebook/></a></span>
            <span className="mx-3 hover:text-purple-800"><a href="https://twitter.com"><FaTwitter/></a></span>
            <span className="mx-3 hover:text-pink-700"><a href="https://instagram.com"><FaInstagram/></a></span>
            <span className="mx-3 hover:text-red-700"><a href="https://youtube.com"><FaYoutube/></a></span>
        </div>
    )
}

export default Social
