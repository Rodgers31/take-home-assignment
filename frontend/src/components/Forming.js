import React, { useState, useEffect } from 'react';

const url = 'http://localhost:9000/api/cultures/forming';

const Forming = () => {
  const [cultures, setCulture] = useState([]);

  const getCultures = async () => {
    const response = await fetch(url);
    const cultures = await response.json();
    setCulture(cultures);
    console.log('forming', cultures);
  };
  useEffect(() => {
    getCultures();
  }, []);
  return (
    <>
      <h1 className='header'>Forming</h1>
      <ul className='culture'>
        {cultures.map((culture) => {
          const { id, url } = culture;
          return (
            <li key={id}>
              <img src={url} alt={url} />
              <div className='form'>
                <button className='btn'>Forming</button>
                <button className='btn'>Not forming</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Forming;
