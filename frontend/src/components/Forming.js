import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import axios from 'axios';

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

  const handleNonforming = (id) => {
    axios
      .put(`http://localhost:9000/api/cultures/${id}`, {
        forming: false,
      })

      .then((res) => {
        window.alert(`${res.data.message}`);
        console.log('return from post', res.data);
      });
  };

  return (
    <>
      <h1 className='header'>Forming</h1>
      <Link to='/' className='filter-btn' id='header'>
        <FaBackward />
      </Link>
      <ul className='culture'>
        {cultures.map((culture) => {
          const { id, url } = culture;
          return (
            <li key={id}>
              <p>{id}</p>
              <img src={url} alt={url} />
              <div className='form'>
                <button className='btn' onClick={() => handleNonforming(id)}>
                  Not forming
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Forming;
