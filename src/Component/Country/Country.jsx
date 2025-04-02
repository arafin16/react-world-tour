import React, { useState } from 'react';
import './Country.css'
import Countries from '../Countries/Countries';

const Country = ({country,markVisitedButton,addFlags}) => {
    const {name, flags,population , area,cca3}=country;
    const [visited ,setVisited]=useState(false);
    const handelClick=()=>{
        setVisited(! visited);
    }

    
    return (
        <div className={`country ${visited? 'visited':'non-visited'}`}>
            <h3 style={{color:visited?'red':'green'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p><small>{cca3}</small></p>
            <button onClick={()=>markVisitedButton(country)}> Mark Visited</button>
            <button onClick={()=>addFlags(country.flag.png)}>add flags</button>
            <hr />
            
            <button onClick={handelClick}>{visited? 'visited':'going'}</button>
            {visited? 'i am going ':'i do not go'}

            

        </div>
    );
};

export default Country;