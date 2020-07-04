import React, { useState } from 'react'
import Calendar from 'react-calendar'
import '../App.css'
import '../CustomStyle.css'

function Calender() {
    const[dt, setdt]= useState(new Date())
    onchange = date => setdt(date)
    return (
      <div>
        <h1 className="text-red-500 text-2xl mt-12 md:text-4xl lg:text-6xl text-center">Calendar</h1>
        <div className="flex justify-center py-20">
        <Calendar
          onChange={onchange}
          value={dt}
        />
        </div>

      </div>
    )
}

export default Calender
