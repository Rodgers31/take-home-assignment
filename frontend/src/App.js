import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Category from './components/Category';
import Culture from './components/Cultures';
import Forming from './components/Forming';
import Nonforming from './components/Nonforming';

const url = 'http://localhost:9000/api/cultures';

const App = () => {
  const [cultures, setCulture] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrenPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const getCultures = async () => {
    setLoading(true);
    const response = await fetch(url);
    const cultures = await response.json();
    setCulture(cultures);
    console.log(cultures);
    setLoading(false);
  };
  useEffect(() => {
    getCultures();
  }, []);

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFistPost = indexOfLastPost - postsPerPage;
  const currentPosts = cultures.slice(indexOfFistPost, indexOfLastPost);
  return (
    <>
      <h1 className='header'>Culture App</h1>
      <h3 className='header'>Uclassified page</h3>
      <Category />
      <Culture cultures={currentPosts} loading={loading} />
    </>
  );
};

export default App;
