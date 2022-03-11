import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBackward } from 'react-icons/fa';
import axios from 'axios';

const url = 'http://localhost:9000/api/cultures/nonforming';

const Nonforming = () => {
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
  const handleForming = (id) => {
    axios
      .put(`http://localhost:9000/api/cultures/${id}`, {
        forming: true,
      })

      .then((res) => {
        window.alert(`${res.data.message}`);
        console.log('return from post', res.data);
      });
  };
  return (
    <>
      <h1 className='header'>Non Forming</h1>
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
                <button className='btn' onClick={() => handleForming(id)}>
                  Forming
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Nonforming;
