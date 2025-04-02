import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    
    const[countries, setCountries]=useState([]);
    const [visitedflag,setVisitedflag]=useState([]);
    const[countriesvisited, setCountriesvisited]=useState([]);
    const markVisitedButton= country =>{
        console.log('object')
        const newvisitedcountry=[...countriesvisited,country];
        setCountriesvisited(newvisitedcountry);
    }
     const addFlags= flag =>{
        console.log("add flags");
        const newflag=[...visitedflag,flag];
        setVisitedflag(newflag);
     }



    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])
    return (
        <>
        <div >
            <h3>Countries:{countries.length}</h3>
            <div>
                <h3>visited Country:{countriesvisited.length}
                    <ul>
                        {
                            countriesvisited.map(country=><li kry={country.cca3} >{country.name.common}</li>)
                        }

                    </ul>
                </h3>
            </div>
            
        </div>
        <div style={{border:'2px solid green'}}>
            {
                visitedflag.map(flag => <img src={flag}></img>)
            }
        </div>
        <div className='country-container'>
            {
                countries.map(country =><Country key={country.cca3} markVisitedButton={markVisitedButton} addFlags={addFlags} country={country}></Country>)
            }
          
            </div>
        </>
    );
};

export default Countries;