import React from 'react'
import '../App.css'
import Social from './Social';

function Footer() {
    let dt = new Date();
    let year = dt.getFullYear()
    return (
        <div>
            <div className="bg-gray-500 w-full h-20 ">
            <span className="md:flex"><Social/></span>
            <p className="text-center"> Copright @ {year}</p>
        </div>
        </div>
        
    )
}

export default Footer
