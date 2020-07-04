import React, { useState, useEffect } from 'react'
import '../App.css'
// import info from '../Questions/Countries.json'
import axios from 'axios'

function Countries() {
    const [countries, setcountries] = useState('')

    useEffect(() => {
        axios.get("https://restcountries.eu/rest/v2/name/Pakistan")
            .then(res => {
                console.log(res.data[0])
                setcountries(res.data[0])
            })
    }, []);

    return (
        <div>
            <h1 className="text-red-500 text-2xl text-center mt-12 md:text-4xl lg:text-6xl">Countries Info</h1>
            <div className="bg-gray-500 w-11/12 px-8 mx-auto mb-10 rounded-lg md:w-1/2 ">
                <h1 className="flex justify-between text-2xl text-center px-16 py-8 md:text-4xl">{countries.name} <span className="text-white">({countries.alpha3Code})</span> <img src={countries.flag} width="40px" alt="" /></h1>
                <hr/>
                <div className="p-8 text-lg">
                <p>Region : {countries.region}</p>
                <p>Subregion : {countries.subregion}</p>
                <p>Capital : {countries.capital}</p>
                <p>Area : {countries.area} sq.km</p>
                <p>Citizens : {countries.demonym}</p>
                <p>Population : {countries.population}</p>
                <p>Time Zone : {countries.timezones} </p>
                </div>
            </div>

        </div>
    )
}

export default Countries
