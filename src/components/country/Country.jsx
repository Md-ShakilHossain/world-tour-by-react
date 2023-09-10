import { useState } from 'react';
import './country.css'
const Country = ({ country, handleVisitedCountries, handleVisitedFlags }) => {

    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);
    }

    const { name, flags, population, area, cca3 } = country;
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'green' : 'black' }}>Name: {name.common} </h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area} </p>
            <p><small>Code: {cca3} </small></p>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add flag</button>
            <br />
            <button onClick={() => handleVisitedCountries(country)}>Mark Visited</button>
            <br />
            <button onClick={handleVisited}> {visited ? 'Visited' : 'Going'} </button>
            {
                visited ? 'I Have Visited' : 'I want to visit'
            }
        </div>
    );
};

export default Country;