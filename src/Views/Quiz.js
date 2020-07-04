import React from 'react'
import '../App.css'
import file from '../Questions/questions.json'

function Quiz() {
      
        
    return (
        <div>
            <h1 className="text-red-500 text-2xl text-center mt-12 md:text-4xl lg:text-6xl">Quiz Page</h1>
            <ul className="p-4">
               {file.map(x => (
                   <li key={x.qId}>{x.question}  ,  {x.answers[0]}<hr></hr></li>
                   
               ))}
            </ul>
           
        </div>
    )
}

export default Quiz
