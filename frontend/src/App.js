import React, { useState, useEffect } from 'react';
import Category from './components/Category';
import Culture from './components/Cultures';

const url = 'http://localhost:9000/api/cultures';

const App = () => {
  const [cultures, setCulture] = useState([]);

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
      <Category cultures={cultures} />
      <Culture cultures={cultures} />
    </>
  );
};

export default App;
