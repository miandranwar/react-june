import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom'

function Menu() {

    let [showmenu, setshowmenu] = useState(false)

    let navmenu
    if(showmenu){
        navmenu =
            <ul id="menu" className="block">
            <li className="text-center hover:text-red-800">
                <Link to="/" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">Home</Link>
            </li>
            <li className="text-center">
                <Link to="/about" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">About</Link>
            </li>
            <li className="text-center">
                <Link to="/quiz" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">Quiz</Link>
            </li>
            <li className="text-center">
                <Link to="/countries" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">Countries Info</Link>
            </li>
            <li className="text-center">
                <Link to="/bookreader" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">Book Reader</Link>
            </li>
            <li className="text-center">
                <Link to="/contact" onClick={()=> setshowmenu(false)} className="pr-4 font-bold">Contact</Link>
            </li>
        </ul>
        
    }


    return (
        <div>
            
            <div className="visible md:invisible"><FaBars color="red" onClick={()=> setshowmenu(!showmenu)}/>
            </div>
            <div className="visible">
            {navmenu}
            <ul className="hidden md:flex justify-end">
            <li className="text-center">
                <Link to="/" className="pr-4 font-bold">Home</Link>
            </li>
            <li className="text-center">
                <Link to="/about" className="pr-4 font-bold">About</Link>
            </li>
            <li className="text-center">
                <Link to="/quiz" className="pr-4 font-bold">Quiz</Link>
            </li>
            <li className="text-center">
                <Link to="/calender" className="pr-4 font-bold">Calendar</Link>
            </li>
            <li className="text-center">
                <Link to="/countries" className="pr-4 font-bold">Countries Info</Link>
            </li>
            <li className="text-center">
                <Link to="/bookreader" className="pr-4 font-bold">Book Reader</Link>
            </li>
            <li className="text-center">
                <Link to="/contact" className="pr-4 font-bold">Contact</Link>
            </li>
        </ul>
            </div>
        </div>
    )
}

export default Menu
