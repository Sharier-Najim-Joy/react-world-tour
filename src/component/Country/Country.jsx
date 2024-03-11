import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({country ,handleVisitedCountries,handleVisitedFlags}) => {
    // console.log(country);
    const{name,capital,flags,population,area,cca3}=country;
    const [visited,setVisited]=useState(false);
    const handleVisited = () =>{
            setVisited(!visited)
    }
    // console.log(handleVisitedCountries)
    return (
        <div className={`country ${visited ? 'visited' : 'non-visited'}`}>
            <h3 style={{color:visited?'purple':'white'}}>name: {name?.common}</h3>
            <p>Capital: {capital}</p>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            <button onClick={()=> handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <br />
            <button onClick={()=>handleVisitedFlags(country)}>add flags</button>
            <br />
            <button onClick={handleVisited}>{visited ?'Visited':'Going'}</button>
            {visited ? 'i have visited this country':'i want to visit'}
            <hr />
            <CountryDetail 
                country={country}
                handleVisitedCountries={handleVisitedCountries}
                handleVisitedFlags={handleVisitedFlags}
                ></CountryDetail>
        </div>
    );
};

export default Country;