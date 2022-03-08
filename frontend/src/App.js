import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Culture from './components/Cultures';
import Forming from './components/Forming';
import Nonforming from './components/Nonforming';

const url = 'http://localhost:9000/api/cultures';

const App = () => {
  const [cultures, setCulture] = useState([]);

  // const filterItems = (category) => {
  //   if (category === 'all') {
  //     return setCulture(cultures);
  //   }
  //   const newItems = cultures.filter((item) => item.forming === forming);
  //   setCulture(newItems);
  // };

  const getCultures = async () => {
    const response = await fetch(url);
    const cultures = await response.json();
    setCulture(cultures);
    console.log(cultures);
  };
  useEffect(() => {
    getCultures();
  }, []);
  return (
    <>
      <h1 className='header'>Culture App</h1>
      <Category />
      <Culture cultures={cultures} />
    </>
  );
};

export default App;
