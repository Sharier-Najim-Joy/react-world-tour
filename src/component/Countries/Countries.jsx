import { useState } from "react"
import { useEffect } from "react";
import Country from "../Country/Country"
import './Countries.css'
const Countries = () => {
    const [countries,setCountries]=useState([]);

    const [visitedCountries,setVisitedCountries]=useState([]);
    const [visitedFlags,setVisitedFlags]=useState([])

    useEffect(()=>{
      fetch("https://restcountries.com/v3.1/all")
      .then(res=>res.json())
      .then(data =>setCountries(data))
    },[])

    const handleVisitedCountries = country =>{
        console.log('visited country');
        console.log(country)
        const newVisitedCountry=[...visitedCountries,country]
        setVisitedCountries(newVisitedCountry)
    }

    const handleVisitedFlags= flags =>{
        console.log('ki vai')
        const newVisitedFlags=[...visitedFlags,flags]
        setVisitedFlags(newVisitedFlags)
    }
    return (
        <div>
                <h3>Countries : {countries.length}</h3>
                <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                    <ul>
                        {
                            visitedCountries.map(country=><li key={country.ccn3}>{country.name.common}</li>)
                        }
                    </ul>
                </div>
                <div className="flags-container">
                        {
                            visitedFlags.map((flag,idx)=><img key={idx} src={flag.flags.png}></img>)
                        }
                </div>
               <div  className="country-container">
               {
                    countries.map(country=><Country 
                        handleVisitedCountries={handleVisitedCountries}
                        handleVisitedFlags={handleVisitedFlags}
                        key={country.ccn3} 
                        country={country}></Country>)
                }
               </div>
        </div>
    );
};

export default Countries;